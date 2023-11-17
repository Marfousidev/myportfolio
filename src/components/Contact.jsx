import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { Map } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  //template_ok67s9v
  //service_dj246yr
  //YL9rcU1hCLrRUsMvR
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_dj246yr',
        'template_ok67s9v',
        {
          from_name: form.name,
          to_name: "Anass",
          from_email: form.email,
          to_email: "marfoussianas@gmail.com",
          message: form.message,
        },
        'YL9rcU1hCLrRUsMvR'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you for your message. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75]  dark:bg-black-100 bg-white-100 p-8 rounded-2xl '
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className="font-extrabold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]  dark:text-white">Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className=' dark:text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className=' dark:bg-tertiary py-4 px-6 placeholder:text-secondary  dark:text-white rounded-lg outline-none border font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className=' dark:text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className=' dark:bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className=' dark:text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className=' dark:bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border font-medium'
            />
          </label>

          <button
            type='submit'
            className=' dark:bg-tertiary py-3 px-8 rounded-xl outline-none w-fit  dark:text-white font-bold shadow-md shadow-primary border dark:hover:bg-stone-300 hover:bg-stone-300'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
        
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <Map/>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
