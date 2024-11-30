import React, { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

export const ScheduleForm = () => {
  const [step, setStep] = useState(1);
  const timeSlots = [
    '09:00 - 10:00',
    '10:30 - 11:30',
    '12:30 - 13:30',
    '14:00 - 15:00',
    '15:30 - 16:30',
    '17:00 - 18:00'
  ];

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex justify-between mb-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step >= i ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-500'
            }`}>
              {i}
            </div>
            {i < 3 && (
              <div className={`w-24 h-0.5 ${
                step > i ? 'bg-blue-500' : 'bg-gray-200'
              }`} />
            )}
          </div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {step === 1 && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Select a Date</h3>
            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: 31 }, (_, i) => (
                <button
                  key={i}
                  className="p-3 rounded-lg hover:bg-blue-50 transition-colors"
                  onClick={() => setStep(2)}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Choose a Time</h3>
            <div className="grid grid-cols-2 gap-4">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  className="flex items-center justify-center gap-2 p-4 rounded-lg border hover:border-blue-500 hover:bg-blue-50 transition-all"
                  onClick={() => setStep(3)}
                >
                  <Clock className="w-4 h-4" />
                  {time}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Your Details</h3>
            <div className="space-y-4">
              <div className="relative">
                <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full pl-12 pr-4 py-3 rounded-lg border focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                />
              </div>
              <div className="relative">
                <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full pl-12 pr-4 py-3 rounded-lg border focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                />
              </div>
              <div className="relative">
                <Phone className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full pl-12 pr-4 py-3 rounded-lg border focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                />
              </div>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                <textarea
                  placeholder="Tell us about your goals..."
                  className="w-full pl-12 pr-4 py-3 rounded-lg border focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all h-32"
                />
              </div>
              <button
                className="w-full btn-primary font-heading"
                onClick={() => alert('Booking submitted!')}
              >
                Confirm Booking
              </button>
            </div>
          </div>
        )}
      </motion.div>

      <div className="mt-6 flex justify-between font-heading">
        {step > 1 && (
          <button
            className="text-blue-500 hover:text-blue-600"
            onClick={() => setStep(step - 1)}
          >
            Back
          </button>
        )}
        {step < 3 && (
          <button
            className="ml-auto text-blue-500 hover:text-blue-600"
            onClick={() => setStep(step + 1)}
          >
            Skip
          </button>
        )}
      </div>
    </div>
  );
};