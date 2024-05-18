import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]); // empty array to store the data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/post");
        console.log(res.data);
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {data.length > 0 &&
        data.map((singleData, index) => (
          <div key={index} className="min-h-screen w-full my-10">
            <div className="w-5/6 mx-auto ">
              <div className=" md:grid-cols-2 grid sgrid-cols-1 lg:grid-cols-3 md:gap-6">
                <div className="mb-8 max-w-md bg-white border border-gray-200 rounded-lg shadow-lg">
                  <a href="#">
                    <img
                      className="rounded-t-lg"
                      src={`http://localhost:8080/api/${singleData.cover}`}
                      alt=""
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                        {singleData.title}
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-800">
                      {singleData.summary}
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                    >
                      Read more
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Home;
