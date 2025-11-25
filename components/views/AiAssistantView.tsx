
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, Send, Bot, User, Trash2, 
  Copy, CheckCircle2, AlertCircle, FileText, 
  ShieldCheck, BrainCircuit, Terminal
} from 'lucide-react';
import { ChatMessage } from '../../types';
import { GoogleGenAI } from "@google/genai";

const SUGGESTED_PROMPTS = [
  { 
    title: "Draft Policy", 
    prompt: "Draft a concise Acceptable Use Policy for a remote-first startup, focusing on BYOD and data protection.",
    icon: FileText
  },
  { 
    title: "Compare Frameworks", 
    prompt: "Compare NIST CSF 2.0 and ISO 27001:2022. What are the key mapping points and differences?",
    icon: ScaleIcon
  },
  { 
    title: "Risk Calculation", 
    prompt: "Explain the quantitative vs qualitative risk assessment methods and suggest a simple scoring matrix for a small business.",
    icon: BrainCircuit
  },
  { 
    title: "Incident Response", 
    prompt: "Create a checklist for the first hour of a ransomware incident response based on NIST SP 800-61.",
    icon: ShieldCheck
  }
];

// Helper icon component since Scale isn't in the imported set above
function ScaleIcon(props: any) {
  return (
    <svg 
      {...props} 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" height="24" viewBox="0 0 24 24" 
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    >
      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/>
      <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/>
      <path d="M7 21h10"/>
      <path d="M12 3v18"/>
      <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/>
    </svg>
  );
}

// Simple text formatter to handle bolding without heavy markdown deps
const FormattedText = ({ text }: { text: string }) => {
  if (!text) return null;
  return (
    <div className="whitespace-pre-wrap leading-relaxed">
      {text.split(/(\*\*.*?\*\*|`.*?`)/g).map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={index} className="text-white font-bold">{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith('`') && part.endsWith('`')) {
          return <code key={index} className="bg-slate-800 px-1 py-0.5 rounded text-indigo-300 font-mono text-sm">{part.slice(1, -1)}</code>;
        }
        return part;
      })}
    </div>
  );
};

const AiAssistantView: React.FC = () => {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "Hello! I am your GRC AI Consultant. I can help you draft policies, understand complex frameworks (like NIST, ISO, HIPAA), or suggest risk mitigation strategies. How can I assist you today?",
      timestamp: new Date()
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (textOverride?: string) => {
    const textToSend = textOverride || input;
    if (!textToSend.trim() || isLoading) return;

    // Add User Message
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: textToSend,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      if (!process.env.API_KEY) {
        throw new Error("API Key not found. Please ensure process.env.API_KEY is configured.");
      }

      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      // We use gemini-2.5-flash for speed and efficiency
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
          {
             role: 'user',
             parts: [
               { 
                 text: `System Instruction: You are an expert Cybersecurity GRC (Governance, Risk, and Compliance) Consultant. 
                 Your goal is to help security professionals, auditors, and CISOs.
                 - Provide structured, professional, and actionable advice.
                 - Refer to specific frameworks (NIST CSF, ISO 27001, HIPAA, GDPR, etc.) where relevant.
                 - Use bullet points and bold text for clarity.
                 - If asked about specific controls, provide the control ID and description if known.
                 - Be concise but comprehensive.
                 
                 Current User Query: ${textToSend}`
               }
             ]
          }
        ]
      });

      const aiText = response.text || "I apologize, I couldn't generate a response at this time.";

      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: aiText,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      console.error("AI Error:", error);
      const errorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: "I encountered an error connecting to the AI service. Please check your network or API configuration.",
        timestamp: new Date(),
        isError: true
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    if(window.confirm("Clear chat history?")) {
        setMessages([{
            id: 'welcome',
            role: 'model',
            text: "Chat cleared. How can I help you with your GRC tasks?",
            timestamp: new Date()
        }]);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="flex flex-col h-[calc(100vh-140px)] gap-6"
    >
      {/* Header */}
      <div className="flex justify-between items-end border-b border-slate-800 pb-6 flex-shrink-0">
        <div>
          <h2 className="text-3xl font-black text-white mb-2 tracking-tight flex items-center gap-3">
             <Sparkles className="w-8 h-8 text-indigo-400" /> AI GRC Consultant
          </h2>
          <p className="text-slate-400">
            Powered by Gemini 2.5 Flash. Ask about frameworks, controls, or draft documents instantly.
          </p>
        </div>
        <button 
            onClick={clearChat}
            className="flex items-center gap-2 px-3 py-2 text-slate-500 hover:text-rose-400 hover:bg-slate-900 rounded-lg transition-colors text-sm font-medium"
        >
            <Trash2 className="w-4 h-4" /> Clear History
        </button>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex gap-6 overflow-hidden">
        
        {/* Chat Stream */}
        <div className="flex-1 flex flex-col bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden shadow-inner relative">
            
            {/* Messages List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
                {messages.map((msg) => (
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        key={msg.id} 
                        className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                    >
                        {/* Avatar */}
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border ${
                            msg.role === 'user' 
                            ? 'bg-indigo-600 border-indigo-500' 
                            : msg.isError ? 'bg-rose-900 border-rose-700' : 'bg-emerald-600 border-emerald-500'
                        }`}>
                            {msg.role === 'user' ? <User className="w-5 h-5 text-white" /> : <Bot className="w-6 h-6 text-white" />}
                        </div>

                        {/* Bubble */}
                        <div className={`max-w-[80%] rounded-2xl p-5 shadow-lg ${
                             msg.role === 'user' 
                             ? 'bg-slate-800 text-white rounded-tr-none' 
                             : 'bg-slate-950/80 border border-slate-800 text-slate-300 rounded-tl-none'
                        }`}>
                            {msg.isError ? (
                                <div className="flex items-center gap-2 text-rose-400">
                                    <AlertCircle className="w-5 h-5" />
                                    <p>{msg.text}</p>
                                </div>
                            ) : (
                                <div className="prose prose-invert max-w-none text-sm md:text-base">
                                   <FormattedText text={msg.text} />
                                </div>
                            )}
                            
                            {/* Actions for AI messages */}
                            {msg.role === 'model' && !msg.isError && (
                                <div className="mt-4 pt-3 border-t border-slate-800/50 flex justify-end">
                                    <button 
                                        onClick={() => copyToClipboard(msg.text)}
                                        className="text-xs flex items-center gap-1.5 text-slate-500 hover:text-indigo-400 transition-colors"
                                    >
                                        <Copy className="w-3 h-3" /> Copy
                                    </button>
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
                
                {isLoading && (
                     <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-emerald-600 border border-emerald-500 flex items-center justify-center flex-shrink-0">
                             <Bot className="w-6 h-6 text-white animate-pulse" />
                        </div>
                        <div className="bg-slate-950/80 border border-slate-800 rounded-2xl rounded-tl-none p-5 flex items-center gap-2">
                            <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}/>
                            <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}/>
                            <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}/>
                        </div>
                     </motion.div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-slate-900 border-t border-slate-800">
                <div className="relative">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Ask about compliance, risks, or frameworks..."
                        className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl pl-5 pr-14 py-4 focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 outline-none shadow-inner transition-all"
                        disabled={isLoading}
                    />
                    <button 
                        onClick={() => handleSend()}
                        disabled={isLoading || !input.trim()}
                        className="absolute right-2 top-2 bottom-2 aspect-square bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:hover:bg-indigo-600 text-white rounded-lg flex items-center justify-center transition-all shadow-lg shadow-indigo-600/20"
                    >
                        <Send className="w-5 h-5" />
                    </button>
                </div>
                <p className="text-center text-[10px] text-slate-600 mt-2">
                    AI may produce inaccurate information. Always verify with official standards.
                </p>
            </div>
        </div>

        {/* Sidebar / Quick Prompts (Hidden on Mobile) */}
        <div className="hidden xl:flex w-80 flex-col gap-4">
            <div className="p-5 bg-slate-900/50 border border-slate-800 rounded-2xl">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-emerald-400" /> Quick Actions
                </h3>
                <div className="space-y-3">
                    {SUGGESTED_PROMPTS.map((item, idx) => (
                        <button
                            key={idx}
                            onClick={() => handleSend(item.prompt)}
                            disabled={isLoading}
                            className="w-full p-3 bg-slate-950 hover:bg-slate-800 border border-slate-800 hover:border-indigo-500/50 rounded-xl text-left transition-all group"
                        >
                            <div className="flex items-center gap-2 mb-1.5">
                                <item.icon className="w-4 h-4 text-indigo-400 group-hover:text-white transition-colors" />
                                <span className="font-bold text-slate-200 text-sm">{item.title}</span>
                            </div>
                            <p className="text-xs text-slate-500 line-clamp-2">
                                {item.prompt}
                            </p>
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex-1 p-5 bg-gradient-to-b from-indigo-900/10 to-slate-900/50 border border-slate-800 rounded-2xl flex flex-col justify-end">
                <div className="mb-4 p-3 bg-indigo-500/10 rounded-xl w-fit">
                    <BrainCircuit className="w-6 h-6 text-indigo-400" />
                </div>
                <h4 className="font-bold text-white mb-2">Did you know?</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                    You can ask the AI to "Act as an Auditor" to simulate a certification interview for ISO 27001 or SOC 2.
                </p>
            </div>
        </div>

      </div>
    </motion.div>
  );
};

export default AiAssistantView;
