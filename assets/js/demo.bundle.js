(() => {
	const e = document.getElementById("themeSansSerif"),
		t = window.localStorage.getItem("goodkitSansSerif");
	function o(e) {
		document.querySelectorAll(".family-switch").forEach((t) => {
			t.checked = e;
		});
	}
	"true" === t && (e.disabled = !1),
		window.addEventListener("DOMContentLoaded", () => {
			o("true" === t);
		}),
		(window.switchFamily = function (t) {
			window.localStorage.setItem("goodkitSansSerif", t), (e.disabled = !t), o(t);
		});
})();
//# sourceMappingURL=demo.bundle.js.map
