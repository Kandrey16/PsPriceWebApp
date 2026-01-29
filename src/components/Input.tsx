import { Search } from 'lucide-react'

export function CustomInput() {
	return (
		<div
			className='flex items-center rounded-md pl-3 outline-0 w-full has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-500 transition-all 0.7s'
		>
			<Search />
			<input
				className='w-full focus:outline-none p-2'
				placeholder='Найдите игру'
			></input>
		</div>
	)
}
