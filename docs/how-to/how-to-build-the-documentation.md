---
id: build-openhim-documentation
title: Build the documentation
sidebar_label: Build the documentation
keywords:
  - OpenHIM
  - Documentation
description: Building documentation for the OpenHIM
---

To build the documentation execute the commands below from the `/docs` directory:

1. `$ sudo pip install -r requirements.txt`
2. `$ make html`
3. (optional) `$ sphinx-autobuild . _build/html` - to host locally and automatically build the docs on change.
4. When you push changes to origin they will automatically be built on readthedocs.org.
