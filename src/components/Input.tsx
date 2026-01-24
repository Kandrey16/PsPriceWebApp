export function Input() {
	return (
		<div className='flex items-center rounded-md bg-white/5 pl-3 outline-0 w-full has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-500 transition-all 0.7s'>
			<div className='text-white'>$</div>
			<input
				className='w-full text-white focus:outline-none p-2'
				placeholder='Найдите игру'
			></input>
		</div>
	)
}
