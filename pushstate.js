let state = { 'page_id': 1, 'user_id': 5 }
let title = ''
let url = 'hello-world.html'

history.pushState(state, title, url)

window.onpopstate = function(event) {
  alert("location: " + document.location + ", state: " + JSON.stringify(event.state))
}

history.pushState({page: 1}, "title 1", "?page=1")
history.pushState({page: 2}, "title 2", "?page=2")
history.replaceState({page: 3}, "title 3", "?page=3")
history.back() // alerts "location: http://example.com/example.html?page=1, state: {"page":1}"
history.back() // alerts "location: http://example.com/example.html, state: null"
history.go(2)  // alerts "location: http://example.com/example.html?page=3, state: {"page":3}"
