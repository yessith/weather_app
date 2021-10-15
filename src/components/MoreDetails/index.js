import './MoreDetails.css';

export function MoreDetails({ title, icon, value, scale }) {
	return (
		<div className={`weather__card__moreDetails__box`}>
			<h3>{title}</h3>
			<div className='weather__card__moreDetails__box--item'>
				{icon}
				<span>
					{value}
					{scale}
				</span>
			</div>
		</div>
	);
}
