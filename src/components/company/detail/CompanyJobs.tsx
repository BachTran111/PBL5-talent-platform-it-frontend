export const CompanyJobs = ({ companyId }: { companyId: number }) => {
  return (
    <div className='bg-white p-5 rounded-xl border'>
      <h2 className='font-semibold mb-3'>Việc làm đang tuyển</h2>

      <p className='text-gray-500 text-sm'>(TODO: fetch jobs theo companyId: {companyId})</p>
    </div>
  )
}
