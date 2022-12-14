import React from 'react'
import Link from 'next/link'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, EnvelopeIcon, PhoneIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Header from "../components/Header";
import Footer from "../components/Footer";

const navigation = [
    { name: 'Changelog', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Partners', href: '#' },
    { name: 'News', href: '#' },
]
const offices = [
    { id: 1, city: 'New Jersey', address: ['Belleville, NJ 07109'] },
    { id: 2, city: 'Maryland', address: ['Frederick, MD 21703'] },
]
const footerNavigation = {
    solutions: [
        { name: 'Marketing', href: '#' },
        { name: 'Analytics', href: '#' },
        { name: 'Commerce', href: '#' },
        { name: 'Insights', href: '#' },
    ],
    support: [
        { name: 'Pricing', href: '#' },
        { name: 'Documentation', href: '#' },
        { name: 'Guides', href: '#' },
        { name: 'API Status', href: '#' },
    ],
    company: [
        { name: 'About', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Jobs', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Partners', href: '#' },
    ],
    legal: [
        { name: 'Claim', href: '#' },
        { name: 'Privacy', href: '#' },
        { name: 'Terms', href: '#' },
    ],
    social: [
        {
            name: 'Facebook',
            href: '#',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'Instagram',
            href: '#',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'Twitter',
            href: '#',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
            ),
        },
        {
            name: 'LinkedIn',
            href: '#',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
    ],
}

export default function Contact() {
    return (
        <div>
            <header className="sticky top-0 z-10">
                <Header />
            </header>

            <div className="bg-white">
                <Popover as="header" className="relative">

                    <Transition
                        as={Fragment}
                        enter="duration-150 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Popover.Panel focus className="absolute inset-x-0 top-0 z-30 origin-top transform p-2 transition lg:hidden">
                            <div className="overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                                <div className="flex items-center justify-between px-5 pt-4">
                                    <div>
                                        <img
                                            className="h-8 w-auto"
                                            src="https://tailwindui.com/img/logos/mark.svg?color=teal&shade=500"
                                            alt=""
                                        />
                                    </div>
                                    <div className="-mr-2">
                                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-warm-gray-400 hover:bg-warm-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500">
                                            <span className="sr-only">Close menu</span>
                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                        </Popover.Button>
                                    </div>
                                </div>
                                <div className="pt-5 pb-6">
                                    <div className="space-y-1 px-2">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="block rounded-md px-3 py-2 text-base font-medium text-warm-gray-900 hover:bg-warm-gray-50"
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                    <div className="mt-6 px-5">
                                        <a
                                            href="#"
                                            className="block w-full rounded-md border border-transparent bg-teal-500 py-2 px-4 text-center font-medium text-white shadow hover:bg-teal-600"
                                        >
                                            Login
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </Popover>

                <main className="overflow-hidden">
                    {/* Header */}
                    <div className="bg-warm-gray-50">
                        <div className="py-24 lg:py-32">
                            <div className="relative z-10 mx-auto max-w-7xl pl-4 pr-8 sm:px-6 lg:px-8">
                                <h1 className="text-4xl font-bold tracking-tight text-warm-gray-900 sm:text-5xl lg:text-6xl">
                                    Get in touch
                                </h1>
                                <p className="mt-6 max-w-3xl text-xl text-warm-gray-500">
                                    Have a question? Drop us a line!
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact section */}
                    <section className="relative bg-white" aria-labelledby="contact-heading">
                        <div className="absolute h-1/2 w-full bg-warm-gray-50" aria-hidden="true" />
                        {/* Decorative dot pattern */}
                        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <svg
                                className="absolute top-0 right-0 z-0 -translate-y-16 translate-x-1/2 transform sm:translate-x-1/4 md:-translate-y-24 lg:-translate-y-72"
                                width={404}
                                height={384}
                                fill="none"
                                viewBox="0 0 404 384"
                                aria-hidden="true"
                            >
                                <defs>
                                    <pattern
                                        id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                                        x={0}
                                        y={0}
                                        width={20}
                                        height={20}
                                        patternUnits="userSpaceOnUse"
                                    >
                                        <rect x={0} y={0} width={4} height={4} className="text-warm-gray-200" fill="currentColor" />
                                    </pattern>
                                </defs>
                                <rect width={404} height={384} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
                            </svg>
                        </div>
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="relative bg-white shadow-xl">
                                <h2 id="contact-heading" className="sr-only">
                                    Contact us
                                </h2>

                                <div className="grid grid-cols-1 lg:grid-cols-3">
                                    {/* Contact information */}
                                    <div className="relative overflow-hidden bg-gradient-to-b from-teal-500 to-teal-600 py-10 px-6 sm:px-10 xl:p-12">
                                        {/* Decorative angle backgrounds */}
                                        <div className="pointer-events-none absolute inset-0 sm:hidden" aria-hidden="true">
                                            <svg
                                                className="absolute inset-0 h-full w-full"
                                                width={343}
                                                height={388}
                                                viewBox="0 0 343 388"
                                                fill="none"
                                                preserveAspectRatio="xMidYMid slice"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                                                    fill="url(#linear1)"
                                                    fillOpacity=".1"
                                                />
                                                <defs>
                                                    <linearGradient
                                                        id="linear1"
                                                        x1="254.553"
                                                        y1="107.554"
                                                        x2="961.66"
                                                        y2="814.66"
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop stopColor="#fff" />
                                                        <stop offset={1} stopColor="#fff" stopOpacity={0} />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div
                                            className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 sm:block lg:hidden"
                                            aria-hidden="true"
                                        >
                                            <svg
                                                className="absolute inset-0 h-full w-full"
                                                width={359}
                                                height={339}
                                                viewBox="0 0 359 339"
                                                fill="none"
                                                preserveAspectRatio="xMidYMid slice"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                                                    fill="url(#linear2)"
                                                    fillOpacity=".1"
                                                />
                                                <defs>
                                                    <linearGradient
                                                        id="linear2"
                                                        x1="192.553"
                                                        y1="28.553"
                                                        x2="899.66"
                                                        y2="735.66"
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop stopColor="#fff" />
                                                        <stop offset={1} stopColor="#fff" stopOpacity={0} />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div
                                            className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 lg:block"
                                            aria-hidden="true"
                                        >
                                            <svg
                                                className="absolute inset-0 h-full w-full"
                                                width={160}
                                                height={678}
                                                viewBox="0 0 160 678"
                                                fill="none"
                                                preserveAspectRatio="xMidYMid slice"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                                                    fill="url(#linear3)"
                                                    fillOpacity=".1"
                                                />
                                                <defs>
                                                    <linearGradient
                                                        id="linear3"
                                                        x1="192.553"
                                                        y1="325.553"
                                                        x2="899.66"
                                                        y2="1032.66"
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop stopColor="#fff" />
                                                        <stop offset={1} stopColor="#fff" stopOpacity={0} />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-medium text-white">Contact information</h3>
                                        <p className="mt-6 max-w-3xl text-base text-teal-50">
                                            General inquiries about products, important dates or partnerships can be expect a reply within a few days. For immediate answers, most questions can be answered using our chat bot and visiting us on social media.
                                        </p>
                                        <dl className="mt-8 space-y-6">
                                            <dt>
                                                <span className="sr-only">Phone number</span>
                                            </dt>
                                            <dd className="flex text-base text-teal-50">
                                                <PhoneIcon className="h-6 w-6 flex-shrink-0 text-teal-200" aria-hidden="true" />
                                                <span className="ml-3">+1 (973) 619-4071</span>
                                            </dd>
                                            <dt>
                                                <span className="sr-only">Email</span>
                                            </dt>
                                            <dd className="flex text-base text-teal-50">
                                                <EnvelopeIcon className="h-6 w-6 flex-shrink-0 text-teal-200" aria-hidden="true" />
                                                <span className="ml-3">info@xophthalmics.com</span>
                                            </dd>
                                        </dl>
                                        <ul role="list" className="mt-8 flex space-x-12">
                                            <li>
                                                <a className="text-teal-200 hover:text-teal-100" href="#">
                                                    <span className="sr-only">Facebook</span>
                                                    <svg className="h-7 w-7" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="text-teal-200 hover:text-teal-100" href="#">
                                                    <span className="sr-only">Instagram</span>
                                                    <svg className="h-7 w-7" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="text-teal-200 hover:text-teal-100" href="#">
                                                    <span className="sr-only">Twitter</span>
                                                    <svg className="h-7 w-7" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="text-teal-200 hover:text-teal-100" href="#">
                                                    <span className="sr-only">LinkedIn</span>
                                                    <svg className="h-7 w-7" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Contact form */}
                                    <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                                        <h3 className="text-lg font-medium text-warm-gray-900">Send us a message</h3>
                                        <form action="#" method="POST" className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                                            <div>
                                                <label htmlFor="first-name" className="block text-sm font-medium text-warm-gray-900">
                                                    First name
                                                </label>
                                                <div className="mt-1">
                                                    <input
                                                        type="text"
                                                        name="first-name"
                                                        id="first-name"
                                                        autoComplete="given-name"
                                                        className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="last-name" className="block text-sm font-medium text-warm-gray-900">
                                                    Last name
                                                </label>
                                                <div className="mt-1">
                                                    <input
                                                        type="text"
                                                        name="last-name"
                                                        id="last-name"
                                                        autoComplete="family-name"
                                                        className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium text-warm-gray-900">
                                                    Email
                                                </label>
                                                <div className="mt-1">
                                                    <input
                                                        id="email"
                                                        name="email"
                                                        type="email"
                                                        autoComplete="email"
                                                        className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex justify-between">
                                                    <label htmlFor="phone" className="block text-sm font-medium text-warm-gray-900">
                                                        Phone
                                                    </label>
                                                    <span id="phone-optional" className="text-sm text-warm-gray-500">
                                                        Optional
                                                    </span>
                                                </div>
                                                <div className="mt-1">
                                                    <input
                                                        type="text"
                                                        name="phone"
                                                        id="phone"
                                                        autoComplete="tel"
                                                        className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                                                        aria-describedby="phone-optional"
                                                    />
                                                </div>
                                            </div>
                                            <div className="sm:col-span-2">
                                                <label htmlFor="subject" className="block text-sm font-medium text-warm-gray-900">
                                                    Subject
                                                </label>
                                                <div className="mt-1">
                                                    <input
                                                        type="text"
                                                        name="subject"
                                                        id="subject"
                                                        className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                                                    />
                                                </div>
                                            </div>
                                            <div className="sm:col-span-2">
                                                <div className="flex justify-between">
                                                    <label htmlFor="message" className="block text-sm font-medium text-warm-gray-900">
                                                        Message
                                                    </label>
                                                    <span id="message-max" className="text-sm text-warm-gray-500">
                                                        Max. 500 characters
                                                    </span>
                                                </div>
                                                <div className="mt-1">
                                                    <textarea
                                                        id="message"
                                                        name="message"
                                                        rows={4}
                                                        className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                                                        aria-describedby="message-max"
                                                        defaultValue={''}
                                                    />
                                                </div>
                                            </div>
                                            <div className="sm:col-span-2 sm:flex sm:justify-end">
                                                <button
                                                    type="submit"
                                                    className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-teal-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 sm:w-auto"
                                                >
                                                    Submit
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Contact grid */}
                    <section aria-labelledby="offices-heading">
                        <div className="mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                            <h2 id="offices-heading" className="text-3xl font-bold tracking-tight text-warm-gray-900">
                                Our offices
                            </h2>
                            <p className="mt-6 max-w-3xl text-lg text-warm-gray-500">
                                We are a United States-based company spanning locations from New Jersey to Maryland.
                            </p>
                            <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
                                {offices.map((office) => (
                                    <div key={office.id}>
                                        <h3 className="text-lg font-medium text-warm-gray-900">{office.city}</h3>
                                        <p className="mt-2 text-base text-warm-gray-500">
                                            {office.address.map((line) => (
                                                <span key={line} className="block">
                                                    {line}
                                                </span>
                                            ))}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </div>
    )
}
