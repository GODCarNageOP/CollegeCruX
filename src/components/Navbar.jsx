import { useContext, useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { Tilt } from "react-tilt";
import { AuthContext } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import Swal from 'sweetalert2'

const navigation = [
  { name: "Home", link: "/" },
  { name: "Top College", link: "/topcolleges" },
  { name: "Top University", link: "/topuniversities" },
  { name: "Admission", link: "/admission" },
  // { name: "About", link: "/aboutus" },
  { name: "Contact", link: "mailto:1032201286@tcetmumbai.in" },
  // { name: '', href: '#' },
];

const handleSignOut = async () => {
  await signOut(auth);
  showLogout()
};

function showLogout() {
  Swal.fire({
    title: "Succesfully Logged Out",
    text: '',
    icon: 'info',
    confirmButtonText: 'Okay'
  })
}

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const Navigate = useNavigate()
  const handleOpen = () =>currentUser?  setOpen((cur) => !cur): Navigate("/login");

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <div className="-m-1.5 p-1.5 relative group">
              <Link to="/">
              <div className="absolute bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl blur-xl opacity-80 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 w-10 -z-10"></div>
                <span className="sr-only">Your Company</span>
                <Tilt>
                <img className="h-20 w-auto relative group" src={logo} alt="" />
                </Tilt>
              </Link>
            </div>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link to={item.link}>
                <div
                  key={item.name}
                  className="text-lg font-semibold leading-6 text-gray-900 uppercase"
                >
                  {item.name}
                </div>
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link>
              <Tilt>
                <button className="text-sm font-semibold leading-6 text-white border p-2 bg-black rounded-xl flex relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl blur-xl opacity-80 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 w-24 -z-10"></div>
                 {currentUser ?< span className="mx-2" onClick={handleSignOut}>Logout</span>: < span className="mx-2" onClick={handleOpen}>Login</span>}
                  <span aria-hidden="true">&rarr;</span>
                </button>
              </Tilt>
            </Link>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-14 w-auto" src={logo} alt="" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                  <Link to={item.link}>
                  <div
                    key={item.name}
                    className="text-lg font-semibold leading-6 text-gray-900 uppercase"
                  >
                    {item.name}
                  </div>
                </Link>
                  ))}
                </div>
                <div className="py-6">
                  <div
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={handleOpen}
                  >
                    Log in
                  </div>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
