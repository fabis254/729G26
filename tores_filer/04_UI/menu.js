$(document).ready(function() {

	var menu = $(`<ul id="menu">
		<li><a href="index.html">Home</a></li>
		<li><a href="#">Slideshow</a></li>
		<li>
			<a href="#">jQuery UI</a>
			<ul>
				<li><a href="accordion.html">Accordion</a></li>
				<li><a href="tabs.html">Tabs</a></li>

		</li>
	</ul>`);
	$("#menubar").append(menu);
		$("#menu").menu();
	});