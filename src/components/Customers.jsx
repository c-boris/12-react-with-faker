import React, { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';
import Customer from "./Customer";
import '../App.css';

const generateRandomCustomer = () => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const username = `${firstName.toLowerCase()}.${lastName.toLowerCase()}`;
  const email = `${username}@gmail.com`;

  return {
    id: faker.string.uuid(),
    firstName: firstName,
    lastName: lastName,
    phoneNumber: faker.phone.number(),
    email: email,
    avatar: faker.internet.avatar(),
    job: faker.person.jobTitle()
  };
};

const Customers = () => {
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [customersList, setCustomersList] = useState([]);

  useEffect(() => {
    const initialCustomers = Array.from({ length: 100 }, generateRandomCustomer).sort((a, b) => {
      return a.firstName.localeCompare(b.firstName) || a.lastName.localeCompare(b.lastName);
    });

    setCustomersList(initialCustomers);
  }, []);

  const handleCustomerClick = (customer) => {
    setSelectedCustomer(customer);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>Customer list</h2>
          <div className="customer-list">
            <ul>
              {customersList.map((customerData) => (
                <li key={customerData.id} onClick={() => handleCustomerClick(customerData)}>
                  {`${customerData.firstName} ${customerData.lastName}`}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col">
          {selectedCustomer && (
            <div>
              <h2>Customer details</h2>
              <Customer data={selectedCustomer} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Customers;
