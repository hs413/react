import AuthForm from '../components/AuthForm';

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({}) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get('mode') || 'login';

  if (mode !== 'login' && mode !== 'signup') {
    throw json({message: 'Unsupported mode'}, {status: 422});
  }

  const data = await request.formData();
  const authData = {
    email: data.get('email'),
    password: data.get('password'),
  }

  const response = await fetch(`http://localhost:8080/${mode}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(authData),
  })

  if (response.status === 422 || response.data === 401) {
    return response;
  }

  if (!response.ok) {
    throw json({message: 'coud not authenticate user '}, {status: 500});
  }

  const resData = await response.json();
  const token = resData.token;

  localStorage.setItem('token', token);

  return redirect('/')
}