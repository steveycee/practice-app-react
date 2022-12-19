function Header(props) {
	return (
		<div className="tile header">
			<div>
				<h1>{props.title}</h1>
				<p>{props.strapline}</p>
			</div>
		</div>
	);
}

export default Header;
