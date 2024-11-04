// FestBookingForm.jsx
import { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const FestBookingForm = () => {
  const [name, setName] = useState('');
  const [college, setCollege] = useState('');
  const [dayPass, setDayPass] = useState('1st day');
  const [members, setMembers] = useState([{ name: '', college: '', contact: '', email: '', events: ['Coding'] }]);
  const [referralCode, setReferralCode] = useState('');
  const [discountMessage, setDiscountMessage] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [errors, setErrors] = useState({}); 
  const navigate = useNavigate();

  const availableEvents = [
    { value: 'Coding', label: 'Coding' },
    { value: 'Hackathon', label: 'Hackathon' },
    { value: 'Gaming', label: 'Gaming' },
    { value: 'Music', label: 'Music' },
    { value: 'Dance', label: 'Dance' },
  ];

  const referralDiscounts = {
    'DISCOUNT50': 50,
    'DISCOUNT100': 100,
    'PLINTH2024': 150,
  };

  const handleMemberAdd = () => {
    setMembers([...members, { name: '', college: '', contact: '', email: '', events: ['Coding'] }]);
  };

  const handleMemberRemove = (index) => {
    const updatedMembers = members.filter((_, idx) => idx !== index);
    setMembers(updatedMembers);
  };

  const calculatePrice = () => {
    let basePrice = dayPass === 'All three days' ? 949 : 649;
    let memberCost = members.reduce((total, member) => {
      let extraEvents = member.events.length > 1 ? (member.events.length - 1) * 149 : 0;
      return total + basePrice + extraEvents;
    }, 0);

    let discount = referralDiscounts[referralCode] || 0;
    
    if (discount > 0) {
      setDiscountMessage(`Discount of Rs ${discount} successfully applied.`);
    } else {
      setDiscountMessage('');
    }
    const finalPrice = memberCost - discount;
    setTotalPrice(finalPrice);
    return finalPrice;
  };

  const handleSubmit = async () => {

    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    members.forEach((member, idx) => {
      if (!member.name) newErrors[`memberName${idx}`] = 'Member name is required';
      if (!member.college) newErrors[`memberCollege${idx}`] = 'Member college is required';
      
      if (!member.contact) newErrors[`memberContact${idx}`] = 'Member contact is required';
      else if (!/^\d{10}$/.test(member.contact)) {
        newErrors[`memberContact${idx}`] = 'Contact must be a 10-digit number';
      }

      if (!member.email) newErrors[`memberEmail${idx}`] = 'Member email is required';
      else if (!emailRegex.test(member.email)) {
        newErrors[`memberEmail${idx}`] = 'Invalid email format';
      }
      
    });
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors); // Set error messages if validation fails
      return;
    }

    const total = calculatePrice(); // Ensure this is called before the submission
    const data = {
      name,
      college,
      dayPass,
      members,
      referralCode,
      totalPrice: total,
    };
    try {
      const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/booking`, data);
      navigate('/payment', { state: { booking: response.data.booking } });
    } catch (error) {
      console.error("Error in booking submission:", error);
    }
  };

  useEffect(() => {
    calculatePrice();
  }, [referralCode, dayPass, members]);

  return (
    <div className="max-w-3xl mx-auto mb-10 mt-10 p-8 border rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Fest Booking Form</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="col-span-1 md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Day Pass</label>
          <select
            value={dayPass}
            onChange={(e) => setDayPass(e.target.value)}
            className="mt-1 block w-full border rounded-md p-3 text-gray-700"
          >
            <option value="1st day">1st day</option>
            <option value="2nd day">2nd day</option>
            <option value="3rd day">3rd day</option>
            <option value="All three days">All three days</option>
          </select>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Members</h3>
        {members.map((member, idx) => (
          <div key={idx} className="mb-6 p-4 border rounded-lg bg-gray-50 relative">
            <h4 className="text-lg font-medium mb-2">Member {idx + 1}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Member Name</label>
                <input
                  type="text"
                  value={member.name}
                  placeholder="Member Name"
                  onChange={(e) => {
                    const newMembers = [...members];
                    newMembers[idx].name = e.target.value;
                    setMembers(newMembers);
                    setErrors({ ...errors, [`memberName${idx}`]: '' });
                  }}
                  className="mt-1 block w-full border rounded-md p-3 text-gray-700"
                />
                {errors[`memberName${idx}`] && <p className="text-red-500">{errors[`memberName${idx}`]}</p>}
              </div>  
              <div>
                <label className="block text-sm font-medium text-gray-700">College Name</label>
                <input
                  type="text"
                  value={member.college}
                  placeholder="Member College"
                  onChange={(e) => {
                    const newMembers = [...members];
                    newMembers[idx].college = e.target.value;
                    setMembers(newMembers);
                    setErrors({ ...errors , [`memberCollege${idx}`]:''});
                  }}
                  className="mt-1 block w-full border rounded-md p-3 text-gray-700"
                />
                {errors[`memberCollege${idx}`] && <p className="text-red-500">{errors[`memberCollege${idx}`]}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Contact</label>
                <input
                  type="text"
                  value={member.contact}
                  placeholder="Member Contact"
                  onChange={(e) => {
                    const newMembers = [...members];
                    newMembers[idx].contact = e.target.value;
                    setMembers(newMembers);
                    setErrors({ ...errors, [`memberContact${idx}`]: '' });
                  }}
                  className="mt-1 block w-full border rounded-md p-3 text-gray-700"
                />
                  {errors[`memberContact${idx}`] && <p className="text-red-500">{errors[`memberContact${idx}`]}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="text"
                  value={member.email}
                  placeholder="Member Email"
                  onChange={(e) => {
                    const newMembers = [...members];
                    newMembers[idx].email = e.target.value;
                    setMembers(newMembers);
                    setErrors({ ...errors, [`memberEmail${idx}`]: '' });
                  }}
                  className="mt-1 block w-full border rounded-md p-3 text-gray-700"
                />
                {errors[`memberEmail${idx}`] && <p className="text-red-500">{errors[`memberEmail${idx}`]}</p>}
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Events</label>
              <Select
                isMulti
                value={member.events.map(event => availableEvents.find(ev => ev.value === event))}
                onChange={(selectedOptions) => {
                  const newMembers = [...members];
                  newMembers[idx].events = selectedOptions.map(option => option.value);
                  setMembers(newMembers);
                }}
                options={availableEvents}
                className="mt-1"
              />
            </div>

            <button
              onClick={() => handleMemberRemove(idx)}
              className="absolute top-4 right-4 text-red-500"
            >
              x
            </button>
          </div>
        ))}
        <button
          onClick={handleMemberAdd}
          className="text-blue-500 mt-4 text-lg"
        >
          + Add Another Member
        </button>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">Referral Code (Optional)</label>
        <input
          type="text"
          value={referralCode}
          placeholder="Enter Referral Code"
          onChange={(e) => setReferralCode(e.target.value)}
          className="mt-1 block w-full border rounded-md p-3 text-gray-700"
        />
        {discountMessage && <p className="text-green-600 mt-2">{discountMessage}</p>}
      </div>

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-600 text-white p-4 rounded-md font-semibold"
      >
        Submit Booking
      </button>

      <p className="mt-6 text-lg font-medium">Total Price: <span className="text-green-600">Rs {totalPrice}</span></p>
    </div>
  );
};

export default FestBookingForm;
