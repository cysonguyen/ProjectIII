<template>
  <a-config-provider :locale="locale">
    <a-layout id="components-layout" style="min-height: 100vh">
      <a-back-top :visibilityHeight="10" />
      <a-layout>
        <a-layout-header class="shadow" style="background: #fff">
          <Header />
        </a-layout-header>
        <a-layout-content style="margin: 0 16px">
          <Breadcrumb />
          <nuxt style="minheight: calc(100vh - 170px)" />
        </a-layout-content>
        <a-layout-footer class="text-center text-base">
          ...
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </a-config-provider>
</template>