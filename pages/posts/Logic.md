---
type: post
title: Logic
date: 2023-09-20
---
Don't do these 💀
```
if (A != null) {
  if (B != null){
    //do1
  }
  else {
    return;
  }
}
else {
  return;
}
```

Do these 😇
```

if (A == null) {
  return;
  }
if (B = null){
  return;
}
//do1
//do2
```

You should

```

if (A){
  if (B){
    if (C){
      if (D){
        if (E){
          //do1
        }
      }
    }
  }
}

```

Simplify
```

if (A and B and C and D and E){
    //do1
  }

```