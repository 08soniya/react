import React ,{ useState , useContext } from 'react'
import UseContent from '../context/UseContent'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const {setUser} = useContext(UseContent)

    const submitData = (e) =>{
        e.preventDefault()
        setUser(username)
    }
    return (
        <>
        <section>
            <h2>Sign in</h2>
            <div class="space-y-5">
            <div>
              <label for="" class="text-base font-medium text-gray-900">Email address</label>
              <div class="mt-2">
                <input
                  type="email"
                  placeholder="Email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            <div>
              <div class="flex items-center justify-between">
                <label for="" class="text-base font-medium text-gray-900">Password</label>
              </div>
              <div class="mt-2">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div>
              <button onClick={submitData}
                type="button">
                Get started</button>
            </div>
          </div>        
        </section>
        </>
    )
}

export default Login
