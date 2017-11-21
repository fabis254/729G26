
$(document).ready(function() {
	
	var menu = $(
		`<ul id="menu">
			<li><div><a href="index.html">Home</a></div></li>
			<li><div>Slideshow</div></li>
			<li><div>jQuery UI</div>
				<ul>
					<li><div><a href="accordion.html">Accordion</a></div></li>
					<li><div><a href="tabs.html">Tabs</a></div></li>
				</ul>
			</li>
		</ul>`);
	
	$("#menubar").append(menu);
  	$("#menu").menu();
});
		