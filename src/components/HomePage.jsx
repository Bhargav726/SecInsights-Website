import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBuilding, FaFileAlt, FaCalendarAlt, FaGithub } from 'react-icons/fa';
import SelectedItemsList from './SelectedItemsList';
import companyData from '../assets/companies.json';

const HomePage = () => {
  const [selections, setSelections] = useState([]);
  const [form, setForm] = useState({ company: '', docType: '', year: '' });
  const [count, setCount] = useState(10);

  const handleAdd = () => {
    if (form.company && form.docType && form.year && count > 0) {
      const pdfPath = form.docType === '10K' ? '/p1.pdf' : '/p2.pdf';
      setSelections([...selections, { ...form, document: pdfPath }]);
      setForm({ company: '', docType: '', year: '' });
      setCount(prev => prev - 1);
    }
  };

  const handleDelete = (index) => {
    setSelections(selections.filter((_, i) => i !== index));
    setCount(prev => prev + 1);
  };

  return (
    <>
      {/* HEADER START */}
      <header className="w-screen bg-gradient-to-t from-purple-100 via-white to-yellow-50 pb-8 text-center px-4 pt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-4xl font-serif text-gray-900">
            Empower your organization’s Business Intelligence
          </h1>
          <h2 className="mt-3 text-4xl md:text-4xl font-serif text-black">
            with <span className="font-black text-4xl font-serif">SEC Insights</span>
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Effortlessly analyze multifaceted financial
          </p>
          <p className="text-lg text-gray-700">
            documents such as 10-Ks and 10-Qs.
          </p>

          <a
            href="https://github.com/Bhargav726"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 text-black hover:text-black-800 transition-colors duration-200 text-sm md:text-base font-medium border border-black"
          >
            <FaGithub size={20} />
            Open-Sourced on GitHub
          </a>
        </div>
      </header>
      {/* HEADER END */}

      {/* DOCUMENT SELECTION SECTION */}
      <main className="min-h-full bg-gradient-to-b from-[#f3e8ff] via-[#eef0f4] to-[#fef9ed] p-2 flex justify-center">
        <div className="w-full max-w-5xl bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-center text-1xl font-bold mb-6">
            Start your conversation by selecting the documents you want to explore
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            {/* Company */}
            <div className="relative">
              <FaBuilding className="absolute top-3 left-3 text-gray-400" />
              <select
                className="w-full p-2 pl-10 border border-gray-300 rounded"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
              >
                <option value="">Search by company ticker or name</option>
                {companyData.map((company, index) => (
                  <option key={index} value={`${company.ticker} - ${company.name}`}>
                    {company.name} ({company.ticker})
                  </option>
                ))}
              </select>
            </div>

            {/* Document Type */}
            <div className="relative">
              <FaFileAlt className="absolute top-3 left-3 text-gray-400" />
              <select
                className="w-full p-2 pl-10 border border-gray-300 rounded"
                value={form.docType}
                onChange={(e) => setForm({ ...form, docType: e.target.value, year: '' })} // reset year/quarter when type changes
              >
                <option value="">Select Document Type</option>
                <option value="10K">Form 10K</option>
                <option value="10Q">Form 10Q</option>
              </select>
            </div>

            {/* Year or Quarter */}
            <div className="relative">
              <FaCalendarAlt className="absolute top-3 left-3 text-gray-400" />
              <select
                className="w-full p-2 pl-10 border border-gray-300 rounded"
                value={form.year}
                onChange={(e) => setForm({ ...form, year: e.target.value })}
              >
                <option value="">
                  {form.docType === '10Q' ? 'Select Quarter' : 'Select Year'}
                </option>
                {form.docType === '10K' ? (
                  // Show years
                  <>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                  </>
                ) : form.docType === '10Q' ? (
                  // Show quarters
                  <>
                    <option value="2021 Q1">2021 Q1</option>
                    <option value="2021 Q2">2021 Q2</option>
                    <option value="2021 Q3">2021 Q3</option>
                    <option value="2021 Q4">2021 Q4</option>
                    <option value="2022 Q1">2022 Q1</option>
                    <option value="2022 Q2">2022 Q2</option>
                    <option value="2022 Q3">2022 Q3</option>
                    <option value="2022 Q4">2022 Q4</option>
                    <option value="2023 Q1">2023 Q1</option>
                    <option value="2023 Q2">2023 Q2</option>
                    <option value="2023 Q3">2023 Q3</option>
                    <option value="2023 Q4">2023 Q4</option>
                    <option value="2024 Q1">2024 Q1</option>
                    <option value="2024 Q2">2024 Q2</option>
                    <option value="2024 Q3">2024 Q3</option>
                    <option value="2024 Q4">2024 Q4</option>
                    <option value="2025 Q1">2025 Q1</option>
                    <option value="2025 Q2">2025 Q2</option>
                    <option value="2025 Q3">2025 Q3</option>
                    <option value="2025 Q4">2025 Q4</option>
                  </>
                ) : null}
              </select>
            </div>



            {/* Add Button */}
            <button
              onClick={handleAdd}
              className={`bg-gray-500 w-2/6 text-white py-2 px-4 rounded transition ${count === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-black'
                }`}
              disabled={count === 0}
            >
              Add
            </button>
          </div>
          <p className="text-right text-xs text-gray-500 mt-1 pr-40">
            <strong>Shift + Enter</strong> to add to list
          </p>
          <div className='h-80 overflow-y-auto'>
          {/* Selected List */}
          <SelectedItemsList selections={selections} onDelete={handleDelete} />
          </div>
          {/* Footer Actions */}
          <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-6">
            <p className="text-gray-600">
              Add up to <span className="font-bold">{count}</span> more docs
            </p>
            <span className="text-gray-500">or</span>
            <Link
              to="/chat"
              state={{ selectedPDFs: selections }}
              className={`bg-gray-600 hover:bg-green-500 text-white py-2 px-6 rounded transition ${selections.length === 0 ? 'opacity-50 pointer-events-none' : ''
                }`}
            >
              start your conversation →
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;