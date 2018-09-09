<template>
    <section class="hero is-fullheight">
        <div class="hero-body">
            <div class="container has-text-centered">
                <h1 class="title">Hello, {{name}}!</h1>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  data: () => ({ name: "World" }),
};
</script>
