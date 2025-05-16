import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import PhoneInput from 'react-phone-number-input';
import Cleave from 'cleave.js/react';
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    contactMethod: '- Выберите из списка -',
  });

  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    contactMethod: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    let valid = true;
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Введите имя';
      valid = false;
    }
    const digits = formData.phone.replace(/\D/g, '');
    if (digits.length !== 11 || !digits.startsWith('7')) {
      newErrors.phone = 'Введите корректный номер телефона';
      valid = false;
    }
    if (formData.contactMethod == '- Выберите из списка -') {
        newErrors.contactMethod = 'Выберите из списка';
        valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    const formData = new FormData(e.target);

    formData.append("access_key", "fd569228-b76b-448b-9590-490f330cbb20");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      e.target.reset();
      console.log('Отправка формы:', formData);
    } else {
      console.log("Error", data);
    }
  };

  return (
    <form onSubmit={handleSubmit} action="https://api.web3forms.com/submit" method="POST" className='flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-6 text-xs md:text-sm lg:text-xl' >
      <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE"></input>
      <div className="lg:min-w-[150px] lg:max-w-[240px]" >
        <label className="block font-medium mb-1" htmlFor="name">
          Имя
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-2 border border-dark rounded-[20px] focus:outline-none focus:ring ${
            errors.name ? 'border-red-500' : 'focus:ring-pink'
          }`}
        />
        {errors.name && <p className="text-red-500 mt-1">{errors.name}</p>}
      </div>

      <div className="flex-1 lg:min-w-[180px] lg:max-w-[280px]">
        <label className="block  font-medium mb-1" htmlFor="phone">
          Телефон
        </label>
        
        <Cleave
          options={{ prefix: '+7', blocks: [2, 0, 3, 0, 3, 2, 2], delimiters: [' ','(', ')', ' ', '-',  '-', '-'], numericOnly: true }}
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full px-4 py-2 border border-dark rounded-[20px] focus:outline-none focus:ring ${
            errors.phone ? 'border-red-500' : 'focus:ring-pink'
          }`}
        />
        {errors.phone && <p className="text-red-500  mt-1">{errors.phone}</p>}
      </div>

      <div className="flex-1 lg:min-w-[200px] lg:max-w-[300px]">
        <label className="block font-medium" htmlFor="contactMethod">
          Способ связи
        </label>
        <select
          id="contactMethod"
          name="contactMethod"
          value={formData.contactMethod}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-[20px] border-dark focus:outline-none focus:ring focus:ring-pink cursor-pointer ${
            errors.contactMethod ? 'border-red-500' : 'focus:ring-pink'
          }`}
        >
          <option value="Выберите из списка">- Выберите из списка -</option>
          <option value="Телефон">Звонок</option>
          <option value="Telegram">Telegram</option>
          <option value="WhatsApp">WhatsApp</option>
        </select>
        {errors.contactMethod && <p className="text-red-500 mt-1">{errors.contactMethod}</p>}
      </div>

      <button
        type="submit"
        className="bg-pink text-dark font-semibold
                   rounded-full px-6 lg:px-4 py-3 md:py-2 lg:py-4 cursor-pointer
                   shadow-lg hover:shadow-xl hover:bg-[#B0B0B0] 
                   transition-transform duration-300 transform hover:scale-105 flex-1 lg:min-w-[180px] lg:max-w-[280px]">
                    Отправить заявку</button>
    </form>
  );
};

export default ContactForm
