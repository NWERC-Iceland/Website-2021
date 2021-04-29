import Link from 'next/link';
import Layout from '../components/Layout.js';
import {Email} from '../lib/util.js';

import "../styles/index.css";

export default () => pug`
  Layout
    h2 Virtual contest environment

    p.
        This year a virtual contest environment will be provided to contestants
        in the form of an OVA Virtual Machine. It is based on Ubuntu 20.04, and
        contains the exact same compiler versions as those used on the judge
        machines, as well as a number of editors, IDEs, and other common
        programming tools. Its use is #[i completely optional] and only
        provided as a convenience.

    h3 Download
    p The OVA for the virtual contest environment can be downloaded here:
        ul
            li #[a(href="https://nwerc-is-vm.s3.eu-central-1.amazonaws.com/nwerc2020-vm-0.1.2.ova") nwerc2020-vm-0.1.2.ova] (4.7GB, sha1: #[tt e02a91c9d30d2e8f0370146017f13f1fc638f3a6])
            li #[a(href="https://nwerc-is-vm.s3.eu-central-1.amazonaws.com/nwerc2020-vm-0.1.1.ova") nwerc2020-vm-0.1.1.ova] (4.6GB, sha1: #[tt 204e0e7e26fd90b10237c6a7274703e52af3c814])
            li #[a(href="https://nwerc-is-vm.s3.eu-central-1.amazonaws.com/nwerc2020-vm-0.1.0.ova") nwerc2020-vm-0.1.0.ova] (4.6GB, sha1: #[tt a8639bb381a1cda886778e57395a757dec562443])

    h3 Usage
    p.
        Make sure you have at least 20GB of free space on your computer, or more to be safe.
        Import the OVA file into #[a(href="https://www.virtualbox.org/") VirtualBox]
        or another hypervisor of your choice. Start the #[tt nwerc2020-vm]
        virtual machine and you will be automatically logged in as the #[tt team]
        user. The user has #[tt sudo] privileges, and its password is #[tt team].
        See below for #[a(href="#faq") frequently asked questions].

    h3 Software

    p.
        In addition to the compilers and interpreters listed on the
        #[Link(href="/system") #[a Judging]] page, as well as reference documentation
        for all five submission languages, the virtual contest environment also
        includes the following software.

    h4 Editors
    p
        ul
            li Atom 1.53.0
            li CLion 2020.3.1
            li Code::Blocks 20.03
            li Eclipse 4.18.0 (with CDT)
            li Emacs 26.3
            li Geany 1.36
            li Gedit 3.36.2
            li IntelliJ IDEA 2020.3.1 (Community Edition)
            li Kate 19.12.3
            li Neovim 0.4.3
            li Pluma 1.24.0
            li PyCharm 2020.3.2 (Community Edition)
            li Sublime Text 3.2.2
            li Vim/GVim 8.1
            li Visual Studio Code 1.52.1

    h4 Terminals
    p
        ul
            li Byobu Terminal 5.133
            li GNOME Terminal 3.36.2
            li XTerm 353

    h4 Scripting
    p
        ul
            li Idle 3.8.5
            li ipython3 7.13.0
            li Perl 5.30.0 (not as a submission language!)

    h4 Debuggers
    p
        ul
            li DDD 3.3.12
            li gdb 9.2
            li JUnit 3.8.2
            li Valgrind 3.15.0

    h4 Utilities
    p
        ul
            li Git 2.25.1
            li Screen 4.08.00
            li Tmux 3.0a

    h3 Commands
    p The virtual contest environment includes a few helper commands to invoke the compilers and interpreters with appropriate command-line flags, as specified above. They are:
        ul
            li #[tt mygcc]
            li #[tt myg++]
            li #[tt myjavac], #[tt myjava]
            li #[tt mypython]
            li #[tt mykotlinc], #[tt mykotlin]
            li #[tt submit]

    p.
        Note that the included editors and IDEs may not use the same compiler
        configuration by default.

    h3#faq Frequently asked questions

    div.faq

        h4 Q: My favorite editor is missing, what do I do?
        p.
            A: The #[tt team] user has full superuser privileges on the virtual
            machine. You are free to make any modifications and install any
            software you require. Just run #[tt sudo apt install some-package].

        h4 Q: Why am I getting E_INVALIDARG (0x80070057) when I run the virtual machine?
        p.
            A: You might not have enough free disk space. Make sure you have at
            least 20GB, or even 30-40GB to be on the safe side.

        h4 Q: Why is the screen resolution so small?
        p.
            A: Screen resolution and scaling can be configured under View > Virtual Screen 1.

        h4 Q: Why is the virtual machine so slow? Why is the screen black?
        p.
            A: Try increasing the Video Memory (found under Settings > Display
            after powering off the virtual machine) to 64MB or more.

        h4 Q: My question is not answered above, what do I do?
        p.
            A: Contact #[Email(address="technical@nwerc.eu")].

    h3 Changelog

    h4 Version 0.1.2
    p
        ul
            li Install submit command
            li Add Kattis team guide
            li Fix network issue in VMWare Workstation
            li Disable cloud-init and apport services
            li Update Java to version 11.0.10
    h4 Version 0.1.1
    p
        ul
            li Increase default Video Memory to 64MB
    h4 Version 0.1.0
    p
        ul
            li Initial version
`;
