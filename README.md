# namerizer

A robust random name generator.

Namerizer provides you with the ability to generate random combinations of adjectives and nouns. It currently contains 3 built-in lists:

- Animal Pals (example random name: "Sleep Owl")
- Millenial Cringe (example random name: "Lit Mustache")
- Fancy Pants (example random name: "Honorable Patron")

### How it works

Install it with npm or yarn...

```
npm -i namerizer
```

Pull it into your environment...

```
import namerizer from "namerizer"
```

Then start generating names!

Each name list has a unique ID. You can grab these dynamically if you want. But each ID is just the list's name in all upper case letters where spaces are replaced with underscores.

```
namerizer.getListIds()
// => ["ANIMAL_PALS", "FANCY_PANTS", "MILLENIAL_CRINGE"]
```

If you want to see the full lists for some reason, you can grab those as well:

```
namerizer.getLists()
/* =>
{
  ANIMAL_PALS: {
    id: "ANIMAL_PALS",
    name: "Animal Pals",
    personality: ["fun", "cute", "silly"],
    adjectives: ["Aberrant", "Able", "Active", ...etc],
    nouns: ["Aardvark", "Alleycat", "Alpaca", ...etc],
  },
  ...etc,
}
*/
```

Most importantly, you'll probably want to generate a name. To do that, just pick a list and pass it to `namerizer.generate`. This will return an instance of a `Name` class that will give you a few options on how to output the generated name.

```
const name = namerizer.generate("ANIMAL_PALS")

name.name()        // => "Sleepy Owl"
name.camelCased()  // => "sleepyOwl"
name.underscored() // => "sleepy_owl"
name.dasherized()  // => "sleepy-owl"
```

And that's it!
