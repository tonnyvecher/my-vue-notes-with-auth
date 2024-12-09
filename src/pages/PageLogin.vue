<template>
  <div class="page-login">
    <div>
      <h1 class="page-login__h1">Мои заметки</h1>
      <h3 class="page-login__h3">Не забывай о важном, храни его в облаке.</h3>
    </div>
    <img class="page-login__img" src="/src/images/img-logo.svg" alt="" />
  </div>
</template>

<script setup></script>

<style scoped>
.page-login {
  text-align: left;
  gap: 40px;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr 1.5fr;
  height: calc(100dvh - 136px);
  grid-template-rows: minmax(0, 100%);
}

.page-login__h1 {
  font-size: 104px;
  font-weight: 900;
  line-height: 104px;
}

.page-login__h3 {
  font-size: 32px;
  font-weight: 400;
  line-height: 48px;
}

.page-login__img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

@media (max-width: 768px) {
  .page-login {
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 16px;
    text-align: center;
    grid-template-rows: auto;
  }

  .page-login__h1h1 {
    font-size: 60px;
    line-height: 64px;
  }

  .page-login__h3 {
    font-size: 24px;
    line-height: 36px;
  }

  .page-login__img {
    margin: 0 auto;
  }
}

@media (max-width: 360px) {
}
</style>
