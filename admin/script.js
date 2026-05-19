const SUPABASE_URL =
  "SUA_URL";

const SUPABASE_KEY =
  "SUA_ANON_KEY";

const client =
  supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
  );

/* LOGIN */

async function login() {

  const email =
    document.getElementById(
      "email"
    ).value;

  const password =
    document.getElementById(
      "password"
    ).value;

  const {
    error
  } = await client.auth.signInWithPassword({

    email,
    password

  });

  if(error) {

    alert(error.message);

    return;

  }

  window.location.href =
    "dashboard.html";
}
