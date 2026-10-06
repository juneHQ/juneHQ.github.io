import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/20/solid';

export function FeatureTable({ name, features }) {
  return (
    <div className="mt-8 flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                    Feature
                  </th>
                  <th scope="col" className="px-3 py-4 text-center text-sm font-semibold text-gray-900">
                    June
                  </th>
                  <th scope="col" className="px-3 py-4 text-center text-sm font-semibold text-gray-900">
                    {name}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {features.map((item) => (
                  <tr key={item.feature}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-700 sm:pl-6">
                      {item.feature}
                    </td>
                    <td
                      className={`whitespace-nowrap px-3 py-4 text-sm ${
                        item.june ? 'text-green-500' : 'text-red-500'
                      } text-center`}
                    >
                      <div className="flex justify-center align-center">
                        {item.june ? (
                          <CheckCircleIcon style={{ height: '20px' }} />
                        ) : (
                          <XCircleIcon style={{ height: '20px' }} />
                        )}
                      </div>
                    </td>
                    <td
                      className={`whitespace-nowrap px-3 py-4 text-sm ${
                        item.competitor ? 'text-green-500' : 'text-red-500'
                      } text-center`}
                    >
                      <div className="flex justify-center align-center">
                        {item.competitor ? (
                          <CheckCircleIcon style={{ height: '20px' }} />
                        ) : (
                          <XCircleIcon style={{ height: '20px' }} />
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
