

import React from 'react';
import { Linkedin, Twitter, Instagram, Facebook, Mail, Phone } from 'lucide-react';

export default function SocialSidebar() {
    return (
        <div className="hidden lg:flex fixed left-8 top-1/2 -translate-y-1/2 z-50 flex-col gap-6 items-center">
            <div className="w-[1px] h-24 bg-slate-300 dark:bg-slate-700"></div>
            <div className="flex flex-col gap-4">
                <a href="tel:+918511705401" className="p-3 bg-white dark:bg-slate-900 rounded-full border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-green-600 dark:hover:text-green-500 transition-all hover:scale-110 shadow-sm hover:shadow-md group relative">
                    <Phone size={20} />
                    <span className="absolute left-full ml-4 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">+91 85117 05401</span>
                </a>
                <a href="https://www.linkedin.com/in/kiri-techhub-6464393ab/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-slate-900 rounded-full border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-blue-600 dark:hover:text-blue-500 transition-all hover:scale-110 shadow-sm hover:shadow-md group relative">
                    <Linkedin size={20} />
                    <span className="absolute left-full ml-4 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">LinkedIn</span>
                </a>
                <a href="https://www.instagram.com/kiri.tech.hub/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-slate-900 rounded-full border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-pink-600 dark:hover:text-pink-500 transition-all hover:scale-110 shadow-sm hover:shadow-md group relative">
                    <Instagram size={20} />
                    <span className="absolute left-full ml-4 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Instagram</span>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61587947721184" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-slate-900 rounded-full border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-blue-700 dark:hover:text-blue-600 transition-all hover:scale-110 shadow-sm hover:shadow-md group relative">
                    <Facebook size={20} />
                    <span className="absolute left-full ml-4 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Facebook</span>
                </a>
                <a href="https://x.com/KiRi_TechHub" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-slate-900 rounded-full border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-black dark:hover:text-white transition-all hover:scale-110 shadow-sm hover:shadow-md group relative">
                    <Twitter size={20} />
                    <span className="absolute left-full ml-4 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">X (Twitter)</span>
                </a>
                <a href="mailto:kiri.tech.hub@gmail.com" className="p-3 bg-white dark:bg-slate-900 rounded-full border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-red-600 dark:hover:text-red-500 transition-all hover:scale-110 shadow-sm hover:shadow-md group relative">
                    <Mail size={20} />
                    <span className="absolute left-full ml-4 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">kiri.tech.hub@gmail.com</span>
                </a>
            </div>
            <div className="w-[1px] h-24 bg-slate-300 dark:bg-slate-700"></div>
        </div>
    );
}
