
<script>
export default {

}
</script>

<template>
  <header>
    <div class="container">
      <nav class="navbar">
        <a href="/" class="nav-branding">彩．壽司</a>
        <ul class="nav-menu">
          <li class="nav-link"><a href="">Home</a></li>
          <li class="nav-link"><a href="">About</a></li>
          <li class="nav-link"><a href="">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>


<style scoped lang="scss">

template {
  position: relative;
}

header {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.77);
}

li {
  list-style: none;
}

a {
  color: #7A816E;
  text-decoration: none;
}

.navbar {
  width: 95%;
  margin: auto;
  min-height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.container {
  width: 1280px;
  margin: auto;
}

.nav-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
}

.nav-branding {
  font-size: 2rem;
}

main {
  height: 700px;
  margin-top: 70px;
  border: 1px solid black;
}

@media (max-width: 1280px) {
  .container {
    width: 100%;
  }
}
</style>
