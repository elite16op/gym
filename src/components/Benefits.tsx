import React from "react";

type Props = {};

const Benefits = (props: Props) => {
  return (
    <div className="mx-auto mt-14 w-[85%] px-4">
      <div className="mx-auto w-[85%] text-center lg:w-[550px]">
        <i className="color block text-4xl font-bold">MORE THAN JUST GYM</i>
        <i className="mt-4 block text-[0.92rem]">
          We provide world class fitness equipment, trainers, classes to get you
          your ultimate fitness goals with ease. We provide true care into each
          and every and every member.
        </i>
      </div>
      <div className="lg:flex lg:justify-between lg:gap-x-6">
        <div className="mx-auto my-8 rounded-md border border-black px-12 py-5 text-center w-[400px]">
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="mx-auto h-8 w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
              />
            </svg>
          </div>
          <i className="color my-5 block font-medium">Daily goal planner</i>
          <i className="block text-[0.92rem]">
            Having a daily checklist goal in the gym, you are holding yourself
            accountable for your fitness routine.
          </i>
        </div>
        <div className="mx-auto my-8 w-[380px] rounded-md border border-black px-12 py-5 text-center">
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-8 w-8 mx-auto"
            >
              <path
                strokeLinecap="round"
                d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          </div>
          <i className="color my-5 block font-medium">Diverse classes</i>
          <i className="block text-[0.92rem]">
            Experience variety of workouts, engage with other people in their
            journey and grow together.
          </i>
        </div>
        <div className="mx-auto my-8 w-[380px] rounded-md border border-black px-12 py-5 text-center">
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="mx-auto h-8 w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
              />
            </svg>
          </div>
          <i className="color my-5 block font-medium">Trained professionals</i>
          <i className="block text-[0.92rem]">
            Trained professionals from the top institutes to help and support
            you in your fitness journey.
          </i>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
