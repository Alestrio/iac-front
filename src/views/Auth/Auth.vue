/* 
* Copyright (c) 2022 Alexis LEBEL 
* All rights reserved. 
*/
<template>
  <div class="w-full h-screen md:p-4 flex justify-center items-center">
    <main
      class="w-full md:w-2/6 xl:w-2/6 h-9/10 flex items-center shadow-xl bg-gray-100 rounded-lg"
    >
      <div class="w-full md:w-3/3 p-5 grid grid-cols-1 space-y-6 text-center">
        <span class="font-bold text-2xl text-purple-500">Projet IaC</span>
        <Form
          class="space-y-3 flex flex-col w-1/2 m-auto"
          @submit="handleLogin"
          :validation-schema="schema"
        >
          <Field
            class="w-full p-1 m-1 rounded-md text-purple-500 text-center focus:border-purple-600 focus:outline-none"
            type="text"
            placeholder="Nom d'utilisateur"
            v-model="username"
            name="username"
          />
          <ErrorMessage name="username" class="text-red-500 bg-red-100 rounded p-2" />
          <Field
            class="w-full p-1 m-1 rounded-md text-purple-500 text-center focus:border-purple-600 focus:outline-none"
            type="password"
            placeholder="Mot de passe"
            v-model="password"
            name="password"
          />
          <ErrorMessage name="password" class="text-red-500 bg-red-100 rounded p-2" />
          <button
            class="w-full p-1 m-1 rounded-md text-white text-center focus:border-purple-600 focus:outline-none bg-purple-500 hover:bg-purple-600"
            :disabled="loading"
          >
            <div
              v-if="this.loading"
            >
              <Puff :height="64" />
            </div>
            <span>Login</span>
          </button>
          <div class="form-group">
            <div v-if="message" class="alert alert-danger" role="alert">
              {{ message }}
            </div>
          </div>
        </Form>
      </div>
    </main>
  </div>
</template>
<script>
  import { Form, Field, ErrorMessage } from "vee-validate";
  import * as yup from "yup";
  import { Puff } from "svg-loaders-vue";

  export default {
    name: "Login",
    components: {
      Form,
      Field,
      ErrorMessage,
      Puff,
    },
    data() {
      const schema = yup.object().shape({
        username: yup
          .string()
          .required("Veuillez entrer votre nom d'utilisateur"),
        password: yup.string().required("Veuillez entrer votre mot de passe"),
      });

      return {
        loading: false,
        message: "",
        schema,

        username: "",
        password: "",
      };
    },
    computed: {
      loggedIn() {
        return this.$store.state.auth.status.loggedIn;
      },
    },
    created() {
      if (this.$store.state.auth.status.loggedIn) {
        this.$router.push("/");
      }
    },
    methods: {
      handleLogin(user) {
        this.loading = true;
        // Validate the form
        this.$store.dispatch("auth/login", user).then(
          () => {
            this.$router.push("/");
          },
          (error) => {
            this.loading = false;
            this.message =
              error.response.data.message || "Une erreur est survenue";
          }
        );
      },
    },
    mounted() {},
  };
</script>
<style scoped></style>
