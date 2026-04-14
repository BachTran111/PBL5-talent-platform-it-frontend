type SalaryRangeSliderProps = {
  value: number
  onChange: (value: number) => void
}

const SalaryRangeSlider = ({ value, onChange }: SalaryRangeSliderProps) => {
  return (
    <div className='space-y-4'>
      <input
        type='range'
        min={1000}
        max={10000}
        step={250}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className='h-2 w-full cursor-pointer appearance-none rounded-full bg-transparent accent-violet-600'
      />
      <div className='relative -mt-2 h-2 rounded-full bg-slate-200'>
        <div className='h-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500' style={{ width: `${((value - 1000) / 9000) * 100}%` }} />
      </div>
      <div className='flex items-center justify-between text-lg text-slate-500'>
        <span>$1,000</span>
        <span>$10,000+</span>
      </div>
    </div>
  )
}

export default SalaryRangeSlider
