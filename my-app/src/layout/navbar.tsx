import {Menubar} from 'primereact/menubar';
import {useNavigate} from 'react-router-dom';
export const Navbar: React.FC=() => {
	const navigate=useNavigate()
	const handleClick=() => {
		navigate('/employees')
	};
	const items=[
		{
			label: 'Home',
			icon: 'pi pi-fw pi-power-off',
			command: handleClick
		}
	];

	return (
		<div className="card">
			<Menubar model={items} />
		</div>
	)
}
