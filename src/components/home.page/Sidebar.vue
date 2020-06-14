<template>
  <div :class="sideIsOpen ? 'home__sidebar--open' : ''" class="home__sidebar">
    <div class="sidebar__content">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, assumenda
        expedita. Aspernatur maiores similique cum ratione vel nulla. Possimus
        similique incidunt sit quisquam, reprehenderit non mollitia sint ipsum
        laboriosam doloribus.
      </p>
      <hr />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, assumenda
        expedita. Aspernatur maiores similique cum ratione vel nulla. Possimus
        similique incidunt sit quisquam, reprehenderit non mollitia sint ipsum
        laboriosam doloribus.
      </p>
      <hr />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, assumenda
        expedita. Aspernatur maiores similique cum ratione vel nulla. Possimus
        similique incidunt sit quisquam, reprehenderit non mollitia sint ipsum
        laboriosam doloribus.
      </p>
      <hr />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, assumenda
        expedita. Aspernatur maiores similique cum ratione vel nulla. Possimus
        similique incidunt sit quisquam, reprehenderit non mollitia sint ipsum
        laboriosam doloribus.
      </p>
      <hr />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, assumenda
        expedita. Aspernatur maiores similique cum ratione vel nulla. Possimus
        similique incidunt sit quisquam, reprehenderit non mollitia sint ipsum
        laboriosam doloribus.
      </p>
      <hr />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      sideIsOpen: state => state.home.sideIsOpen
    })
  },
}
</script>
