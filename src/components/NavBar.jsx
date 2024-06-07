import React from 'react'

function NavBar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Library</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="/">Add Book</a>
        <a class="nav-link" href="/searchbook">Search</a>
        <a class="nav-link" href="/deletebook">Delete</a>
        <a class="nav-link" href="/viewall">View All</a>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar