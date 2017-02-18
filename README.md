## Installation

```sh
$ git clone https://github.com/NYULibraries/agartha-cli
$ cd agartha-cli && npm install
```

## Quick Start

The quickest way to get started with express is to utilize the executable `agartha(1)` to generate an application as shown below:

## Create the app:

```bash
$ agartha create foo -r generic
```
## Build site:

```bash
$ cd foo && agartha forge
```
## Command Line Options

This generator can also be further configured with the following command line flags.

    -r, --relic [relic]     Which relic to use
    -f, --force             force on non-empty directory    
