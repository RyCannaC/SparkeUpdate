'use client';

import { useState } from 'react';
import Calendar from 'react-calendar';
import { add, set } from 'date-fns';
import { z } from 'zod';

// Define a Zod schema for the date and time state
const dateSchema = z.object({
  justDate: z.date().nullable(),
  justTime: z.string().refine((time) => {
    const [hours, minutes] = time.split(':').map(Number);
    return (
      !isNaN(hours) &&
      !isNaN(minutes) &&
      hours >= 0 &&
      hours < 24 &&
      minutes >= 0 &&
      minutes < 60
    );
  }, "Invalid time format"),
});

const ReactCalendar = () => {
  const [date, setDate] = useState({
    justDate: null,
    justTime: '17:00', // Default to 5:00 PM
  });

  // Validate the initial state using the Zod schema
  dateSchema.parse(date);

  const openingTime = date.justDate ? set(date.justDate, { hours: 17, minutes: 0 }) : null;
  const closingTime = date.justDate ? set(date.justDate, { hours: 22, minutes: 0 }) : null;
  const interval = 30;

  const times = [];
  if (openingTime && closingTime) {
    for (let i = openingTime; i <= closingTime; i = add(i, { minutes: interval })) {
      times.push(i);
    }
  }

  const handleTimeChange = (event) => {
    const selectedTime = event.target.value;
    const validationResult = dateSchema.shape.justTime.safeParse(selectedTime);
    if (validationResult.success) {
      const [hours, minutes] = selectedTime.split(':').map(Number);
      setDate((prev) => ({
        ...prev,
        justTime: selectedTime,
        justDate: set(prev.justDate, { hours, minutes }),
      }));
    } else {
      console.error(validationResult.error);
    }
  };

  return (
    <section className='w-full flex-center flex-col'>
      {/* <h1 className='head_text text-center'>
        <span className='orange_gradient text-center'>
          Spark-E Unlimited Electrical Inc.
        </span>
      </h1> */}
      <h3>
      
        <p className='h2_text orange_gradient text-center'>
          Please select a date below
        </p>
      <p className='desc text-center'>
          <br className='max-md:hidden' />
          Or use our <a href='/contactus' className='orange_gradient'>Contact US</a> page.
          <br className='max-md:hidden' />
        </p>

      </h3>
      

      <Calendar
        minDate={new Date()}
        className='react-calendar p-2'
        view='month'
        onClickDay={(selectedDate) =>
          setDate((prev) => ({ ...prev, justDate: selectedDate }))
        }
      />

      {date.justDate && (
        <div>
          <p>Selected Date: {date.justDate.toDateString()}</p>
          <select className='react-calendar p-4' value={date.justTime} onChange={handleTimeChange}>
            {times.map((time, index) => (
              <option key={index} value={time.toTimeString().slice(0, 5)}>
                {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </option>
            ))}
          </select>

         
        </div>
      )}
    </section>
  );
};

export default ReactCalendar;
