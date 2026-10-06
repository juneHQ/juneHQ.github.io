import { useState } from 'react';
import { Box, Container, Flex, Select, Spinner } from '@chakra-ui/react';
import { logEvent } from '../lib/googleAnalytics';

export const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [companySize, setCompanySize] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    fetch(`${process.env.JUNE_API_HOST}/public/demo_requests`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        role: role,
        company_size: companySize,
      }),
    })
      .then(() => {
        const calLink = `https://cal.com/alberto-incisa/chat?email=${encodeURIComponent(
          email,
        )}&name=${encodeURIComponent(`${firstName} ${lastName}`)}&notes=${encodeURIComponent(
          `Role: ${role}, Company Size: ${companySize}`,
        )}`;
        logEvent('demo-booked-lead-magnet-one', 'User Booked Demo Flow');
        window.open(calLink, '_blank');
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle error response
      });

    setTimeout(() => {
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="lg:pt-32">
      <Box id="box" my="auto">
        <Container>
          <div className="sm:mx-auto w-full">
            <div className="bg-gray-50 p-6 shadow-sm border border-gray-100 sm:rounded-lg sm:p-12 relative z-10">
              <Flex justify="start">
                <h2 className="font-hero text-center text-2xl font-black leading-9 tracking-tight text-gray-800">
                  Tell us about yourself
                </h2>
              </Flex>
              <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
                      First name
                    </label>
                    <div className="mt-2">
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
                      Last name
                    </label>
                    <div className="mt-2">
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Work email
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="role" className="block text-sm font-medium leading-6 text-gray-900">
                    What's your role?
                  </label>
                  <div className="mt-2">
                    <Select
                      id="role"
                      name="role"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      required
                      bg="white"
                    >
                      <option value="" disabled>
                        Select a value
                      </option>
                      <option value="Customer success">Customer success</option>
                      <option value="Founder">Founder</option>
                      <option value="Sales">Sales</option>
                      <option value="Product">Product</option>
                      <option value="Other">Other</option>
                    </Select>
                  </div>
                </div>
                <div>
                  <label htmlFor="companySize" className="block text-sm font-medium leading-6 text-gray-900">
                    How big is your company?
                  </label>
                  <div className="mt-2">
                    <Select
                      bg="white"
                      id="companySize"
                      name="companySize"
                      value={companySize}
                      onChange={(e) => setCompanySize(e.target.value)}
                      required
                    >
                      <option value="" disabled>
                        Select a size
                      </option>
                      <option value="1-24">1-24</option>
                      <option value="25-50">25-50</option>
                      <option value="51-100">51-100</option>
                      <option value="101-200">101-200</option>
                      <option value="201-500">201-500</option>
                      <option value="500+">500+</option>
                    </Select>
                  </div>
                </div>
                <button
                  type="submit"
                  className={`border-primary border-2 flex w-full items-center justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-transparent hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark ${
                    isSubmitting && 'opacity-50'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <Spinner size="sm" mr={2} />
                      <span>Requesting...</span>
                    </>
                  ) : (
                    <>Request a demo</>
                  )}
                </button>
              </form>
            </div>
          </div>
        </Container>
      </Box>
    </div>
  );
};
