# yojijukugo
An app displays yojijukugo and their descriptions

Yojijukugo is a Japanese idiom consisted of four chinese character (Kanji)

## flask + vue3

### flask

```bash
cp -p .env.example .env
```

```bash
pipenv shell
```

```bash
pipenv install --dev
```

```bash
python app.py
```

### vue3

```bash
cd client/
```

```bash
npm i
```

```bash
npm run serve
```

Open http://localhost:8080/

## When using production build

### flask

```bash
echo "USE_FLASK_CORS=false" > .env
```

```bash
python app.py
```

Open http://127.0.0.1:5000

### vue3

Update production build

```bash
cd client/
```

```bash
npm run build
```
