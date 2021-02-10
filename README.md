# use UI5 custom controls via npm

this repository showcases two things:

1. how to develop UI5 custom (notepad) controls for distribution via npm-compatible repostiories (`packages/ui5-cc-hello.world`)
2. how to re-use npm-based UI5 custom controls in a UI5 app (`packages/ui5-app`)

This project uses `yarn workspaces` in order to simulate `ui5-cc-hello.world` being the custom control on the public npm registry, and `ui5-app` using bespoken custom control at dev- and build-time.

Blog post with all the details: https://blogs.sap.com/2021/02/10/distribute-and-reuse-ui5-custom-controls-via-npm/

## get started

*development-time*: use the custom control from npm:

```bash
# in / of this repo
$> yarn 
$> yarn start # does ui5 serve
```

*build-time*: include the custom control into a deployable app:

```bash
# in / of this repo
$> yarn 
$> yarn build # does ui5 build --all
```

## license

```
THE DERIVED BEER-WARE LICENSE" (Revision 42):
You can do whatever you want with this stuff. When you like it, just buy
Volker Buzek (@vobu) a beer when you see him.
```

## credits

All hail to the participants of a recent UI5 mob-programming event: @petermuessig, @matz3 and @wridgeu.

**The Beerware License obligations of this showcase extend to them as well!**
