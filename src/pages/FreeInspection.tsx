import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { Reveal } from '../components/Animations';
import SEO from '../components/SEO';

export default function FreeInspection() {
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('submitting');

        const formData = {
            firstName: (document.getElementById('firstName') as HTMLInputElement).value,
            lastName: (document.getElementById('lastName') as HTMLInputElement).value,
            email: (document.getElementById('email') as HTMLInputElement).value,
            phone: (document.getElementById('phone') as HTMLInputElement).value,
            service: (document.getElementById('service') as HTMLSelectElement).value,
            message: (document.getElementById('message') as HTMLTextAreaElement).value,
        };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setFormStatus('success');
            } else {
                console.error('Failed to submit form');
                setFormStatus('idle');
                alert('Failed to send request. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setFormStatus('idle');
            alert('Failed to send request. Please try again.');
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <SEO
                title="Get a Free Inspection"
                description="Schedule a free foundation repair or concrete leveling inspection with Brian's Foundation Repair in Northeast Missouri."
            />

            {/* Header */}
            <section className="bg-primary-black py-16 px-4 sm:px-6 lg:px-8 text-center text-white">
                <Reveal>
                    <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Request a Free Inspection</h1>
                    <p className="text-xl text-primary-gray max-w-2xl mx-auto">
                        Fill out the form below or give us a call to schedule your no-obligation estimate.
                    </p>
                </Reveal>
            </section>

            {/* Main Content */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Contact Info */}
                    <Reveal>
                        <div className="bg-white rounded-3xl p-10 shadow-sm h-full">
                            <h2 className="text-2xl font-display font-bold text-primary-black mb-8">Contact Information</h2>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-red-50 text-primary-red rounded-xl flex items-center justify-center shrink-0">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-primary-black mb-1">Call for emergency repair</h3>
                                        <a href="tel:6604233468" className="text-lg text-primary-gray hover:text-primary-red transition-colors">
                                            (660) 423-3468
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-red-50 text-primary-red rounded-xl flex items-center justify-center shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-primary-black mb-1">Email Us</h3>
                                        <a href="mailto:briansfoundation@gmail.com" className="text-lg text-primary-gray hover:text-primary-red transition-colors">
                                            briansfoundation@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-red-50 text-primary-red rounded-xl flex items-center justify-center shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-primary-black mb-1">Service Area</h3>
                                        <p className="text-lg text-primary-gray">
                                            45325 State Highway 6<br />
                                            Hurdland MO 63547<br />
                                            <span className="text-sm mt-2 block text-gray-500">Serving Northeast Missouri & West-Central Illinois</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* Form */}
                    <Reveal delay={0.2}>
                        <div className="bg-white rounded-3xl p-10 shadow-xl shadow-black/5">
                            {formStatus === 'success' ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="h-full flex flex-col items-center justify-center text-center py-12"
                                >
                                    <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
                                        <CheckCircle2 size={40} />
                                    </div>
                                    <h3 className="text-3xl font-display font-bold text-primary-black mb-4">Request Sent!</h3>
                                    <p className="text-primary-gray text-lg mb-8">
                                        Thank you for reaching out. We will review your information and get back to you shortly to schedule your free inspection.
                                    </p>
                                    <button
                                        onClick={() => setFormStatus('idle')}
                                        className="text-primary-red font-bold hover:text-red-700 transition-colors"
                                    >
                                        Send another request
                                    </button>
                                </motion.div>
                            ) : (
                                <>
                                    <h2 className="text-2xl font-display font-bold text-primary-black mb-8">Send a Message</h2>
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label htmlFor="firstName" className="block text-sm font-semibold text-primary-black">First Name</label>
                                                <input required type="text" id="firstName" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-red/20 focus:border-primary-red transition-colors" placeholder="John" />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="lastName" className="block text-sm font-semibold text-primary-black">Last Name</label>
                                                <input required type="text" id="lastName" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-red/20 focus:border-primary-red transition-colors" placeholder="Doe" />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label htmlFor="email" className="block text-sm font-semibold text-primary-black">Email Address</label>
                                                <input required type="email" id="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-red/20 focus:border-primary-red transition-colors" placeholder="john@example.com" />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="phone" className="block text-sm font-semibold text-primary-black">Phone Number</label>
                                                <input required type="tel" id="phone" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-red/20 focus:border-primary-red transition-colors" placeholder="(555) 123-4567" />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="service" className="block text-sm font-semibold text-primary-black">Service Needed</label>
                                            <select id="service" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-red/20 focus:border-primary-red transition-colors">
                                                <option>Foundation Repair</option>
                                                <option>House Leveling</option>
                                                <option>Concrete Leveling</option>
                                                <option>Not Sure / Other</option>
                                            </select>
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="message" className="block text-sm font-semibold text-primary-black">How can we help?</label>
                                            <textarea id="message" rows={4} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-red/20 focus:border-primary-red transition-colors resize-none" placeholder="Tell us about the issues you're seeing..."></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={formStatus === 'submitting'}
                                            className="w-full bg-primary-black hover:bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                                        >
                                            {formStatus === 'submitting' ? 'Sending...' : (
                                                <>Submit Request <Send size={20} /></>
                                            )}
                                        </button>
                                        <p className="text-center text-xs text-gray-500 mt-4">
                                            By submitting this form, you agree to be contacted remotely. We respect your privacy.
                                        </p>
                                    </form>
                                </>
                            )}
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
