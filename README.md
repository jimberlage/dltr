This tests whether a piece of Prefect's Vue UI components works well in React.

It has two test cases, a baseline app and a modified app.

The baseline app just uses Vue, TS, and the existing Vue `ConfirmDeleteModal` component.

The modified app rebuilds the `ConfirmDeleteModal` component in react, along with some needed components from [prefect-design](https://github.com/PrefectHQ/prefect-design) (`Button`, `Icon`, `LoadingIcon`, `Modal`.)

## Usage

You'll want to run both apps, baseline and modified, so you can compare them side-by-side.

### Baseline

```
cd baseline
npm ci
npm run dev
```

Then visit `http://localhost:5173` in your browser.

### Modified

```
cd modified
npm ci
npm run dev
```

Then visit `http://localhost:5174` in your browser.

## Differences

- I did not port the close-on-esc behavior of the modal from prefect-design.  (Not ideological, just didn't get to it yet.)
- I didn't invest the time to get `react-transition-group`'s `CSSTransition` component working the same as Vue's built-in `Transition`.
