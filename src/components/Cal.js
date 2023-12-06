import React from "react";
import "primeflex/primeflex.css";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";

function Cal() {
  return (
    <div className="surface-0">
      <div className="text-900 font-bold text-6xl mb-4 text-center">
        Pricing Plans
      </div>
      <div className="text-700 text-xl mb-6 text-center line-height-3">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam
        eligendi quos.
      </div>

      <div className="grid">
        <div className="col-12 lg:col-4">
          <div className="p-3 h-full">
            <div
              className="shadow-2 p-3 h-full flex flex-column"
              style={{ borderRadius: "6px" }}
            >
              <div className="text-900 font-medium text-xl mb-2">Calendar One</div>
              <div className="text-600">Plan description</div>
              <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                          <Calendar
                              style={{ borderBottom: '1px solid #00FF00' }}
                              placeholder="Select a date"
                          />
              <hr className="mb-3 mx-0 border-top-1 border-bottom-none border-300 mt-auto" />
              <Button label="Buy Now" className="p-3 w-full mt-auto" />
            </div>
          </div>
        </div>

              <div className="col-12 lg:col-4">
                  <div className="p-3 h-full">
                      <div
                          className="shadow-2 p-3 h-full flex flex-column"
                          style={{ borderRadius: "6px" }}
                      >
                          <div className="text-900 font-medium text-xl mb-2">Calendar One</div>
                          <div className="text-600">Plan description</div>
                          <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                          <Calendar
                              style={{ borderBottom: '1px solid #00FF00' }}
                              placeholder="Select a date"
                          />
                          <hr className="mb-3 mx-0 border-top-1 border-bottom-none border-300 mt-auto" />
                          <Button label="Buy Now" className="p-3 w-full mt-auto" />
                      </div>
                  </div>
              </div>

              <div className="col-12 lg:col-4">
                  <div className="p-3 h-full">
                      <div
                          className="shadow-2 p-3 h-full flex flex-column"
                          style={{ borderRadius: "6px" }}
                      >
                          <div className="text-900 font-medium text-xl mb-2">Calendar One</div>
                          <div className="text-600">Plan description</div>
                          <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                          <Calendar
                              style={{ borderBottom: '1px solid #00FF00' }}
                              placeholder="Select a date"
                          />
                          <hr className="mb-3 mx-0 border-top-1 border-bottom-none border-300 mt-auto" />
                          <Button label="Buy Now" className="p-3 w-full mt-auto" />
                      </div>
                  </div>
              </div>
      </div>
    </div>
  );
}

export default Cal;
