const BookingSteps = () => {
  return (
    <section className="container py-11">
      <h2 className="text-[35px] md:text-[45px] font-medium leading-tight text-center underline">
        How to Book Place
      </h2>
      <ol className="overflow-hidden mt-11 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-11">
        <li>
          <div className="flex items-start">
            <span className="mr-3 text-2xl">1.</span>
            <div>
              <h4 className="text-2xl  mb-2">Identify the Facility</h4>
              <p className="text-sm text-gray-600 max-w-xs mb-4">
                Look for sports facilities in your area that offer the specific
                sport or activity you’re interested in. You have to login for
                continue booking. If you plan to use the facility regularly,
                inquire about membership deals or discounts for frequent users.
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="flex items-start">
            <span className="mr-3 text-2xl">2.</span>
            <div>
              <h4 className="text-2xl  mb-2">Check Availability</h4>
              <p className="text-sm text-gray-600 max-w-xs mb-4">
                You can check the availability of the facility, select a time
                slot, and book directly. If you do not want online booking
                system, you may need to call or visit in person to check
                availability and make a reservation.
              </p>
            </div>
          </div>
        </li>

        <li>
          <div className="flex items-start">
            <span className="mr-3 text-2xl">3.</span>
            <div>
              <h4 className="text-2xl  mb-2">Understand the Requirements</h4>
              <p className="text-sm text-gray-600 max-w-xs mb-4">
                Ensure you understand the facility’s rules, such as dress code,
                equipment policies, and cancellation policies.
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="flex items-start">
            <span className="mr-3 text-2xl">4.</span>
            <div>
              <h4 className="text-2xl  mb-2">Make the Booking</h4>
              <p className="text-sm text-gray-600 max-w-xs mb-4">
                You might need to fill out a form with your details and the time
                slot you want to book. Complete the payment process. This could
                be online. Once the booking is made, ensure you receive a
                confirmation.
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="flex items-start">
            <span className="mr-3 text-2xl">5.</span>
            <div>
              <h4 className="text-2xl  mb-2">Prepare for Your Booking</h4>
              <p className="text-sm text-gray-600 max-w-xs mb-4">
                Plan to arrive a few minutes early to check in and prepare for
                your activity. Depending on the sport, bring any required gear
                or equipment. Adhere to the facility’s guidelines to ensure a
                smooth experience for yourself and others.
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="flex items-start">
            <span className="mr-3 text-2xl">6.</span>
            <div>
              <h4 className="text-2xl  mb-2">Enjoy Your Time!</h4>
              <p className="text-sm text-gray-600 max-w-xs mb-4">
                Enjoy the booked facility and make the most of your time there.
              </p>
            </div>
          </div>
        </li>
      </ol>
    </section>
  );
};

export default BookingSteps;
