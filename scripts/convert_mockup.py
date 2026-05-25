from pathlib import Path
from random import Random

from PIL import Image, ImageDraw, ImageFilter


ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "assets"
PNG_PATH = ASSETS / "mockup.png"
WEBP_PATH = ASSETS / "mockup.webp"


def gradient_background(size):
    width, height = size
    img = Image.new("RGB", size, "#171717")
    px = img.load()
    for y in range(height):
        for x in range(width):
            dx = (x - width * 0.45) / width
            dy = (y - height * 0.3) / height
            glow = max(0, 1 - (dx * dx * 5.5 + dy * dy * 9))
            amber = int(52 * glow)
            red = int(24 * glow)
            base = 18 + int(16 * (y / height))
            px[x, y] = (base + amber + red, base + int(22 * glow), base + int(8 * glow))
    return img


def ellipse(draw, box, fill, outline=None, width=1):
    draw.ellipse(tuple(int(v) for v in box), fill=fill, outline=outline, width=width)


def rounded(draw, box, radius, fill):
    draw.rounded_rectangle(tuple(int(v) for v in box), radius=radius, fill=fill)


def create_mockup():
    scale = 2
    width, height = 1200 * scale, 800 * scale
    rng = Random(12)
    img = gradient_background((width, height)).convert("RGBA")

    shadow = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    sd = ImageDraw.Draw(shadow)
    ellipse(sd, (365 * scale, 194 * scale, 1035 * scale, 738 * scale), (0, 0, 0, 165))
    shadow = shadow.filter(ImageFilter.GaussianBlur(38 * scale))
    img.alpha_composite(shadow)

    plate = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    pd = ImageDraw.Draw(plate)
    ellipse(pd, (286 * scale, 114 * scale, 1068 * scale, 720 * scale), "#f0ece0", "#d3cab8", 8 * scale)
    ellipse(pd, (390 * scale, 198 * scale, 964 * scale, 638 * scale), "#ded6c9", "#c7bba8", 4 * scale)
    img.alpha_composite(plate)

    food = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    fd = ImageDraw.Draw(food)

    # Rice / noodles base.
    for _ in range(380):
        x = rng.randint(455, 885) * scale
        y = rng.randint(285, 545) * scale
        rx = rng.randint(8, 22) * scale
        ry = rng.randint(2, 7) * scale
        color = rng.choice(["#d9b46a", "#e6c47d", "#c99845", "#f0d28a"])
        fd.ellipse((x - rx, y - ry, x + rx, y + ry), fill=color)

    # Bravas / fried bites.
    for x, y, w, h, c in [
        (470, 350, 120, 88, "#c9852d"),
        (595, 316, 132, 94, "#d49a3d"),
        (730, 356, 118, 84, "#b96b22"),
        (548, 450, 132, 92, "#d7a040"),
        (696, 458, 126, 88, "#c27a2c"),
    ]:
        rounded(fd, (x * scale, y * scale, (x + w) * scale, (y + h) * scale), 20 * scale, c)
        fd.line(
            (x * scale + 18 * scale, y * scale + 18 * scale, (x + w - 22) * scale, y * scale + 20 * scale),
            fill=(255, 219, 128, 95),
            width=5 * scale,
        )

    # Protein pieces with sauce.
    for x, y, r, c in [
        (520, 300, 42, "#8f3f1f"),
        (642, 382, 50, "#9d4320"),
        (804, 304, 46, "#7c351d"),
        (850, 470, 44, "#a24d24"),
    ]:
        ellipse(fd, ((x - r) * scale, (y - r * 0.7) * scale, (x + r) * scale, (y + r * 0.7) * scale), c)
        ellipse(
            fd,
            ((x - r * 0.38) * scale, (y - r * 0.35) * scale, (x + r * 0.35) * scale, (y + r * 0.1) * scale),
            (237, 174, 83, 120),
        )

    # Sauces.
    for x, y, rx, ry, c in [
        (585, 486, 42, 17, "#c45605"),
        (732, 412, 48, 18, "#c45605"),
        (486, 408, 40, 16, "#f1e2c0"),
        (808, 536, 45, 17, "#f1e2c0"),
    ]:
        ellipse(fd, ((x - rx) * scale, (y - ry) * scale, (x + rx) * scale, (y + ry) * scale), c)

    # Fresh garnish.
    for _ in range(42):
        x = rng.randint(450, 900) * scale
        y = rng.randint(250, 560) * scale
        length = rng.randint(22, 58) * scale
        angle = rng.uniform(-0.9, 0.9)
        color = rng.choice(["#6f8d43", "#86a64d", "#4e7639"])
        fd.line((x, y, x + int(length * angle), y - int(length * 0.35)), fill=color, width=rng.randint(4, 8) * scale)

    # Sesame-like highlights.
    for _ in range(90):
        x = rng.randint(430, 920) * scale
        y = rng.randint(260, 565) * scale
        fd.ellipse((x - 3 * scale, y - 2 * scale, x + 3 * scale, y + 2 * scale), fill=(245, 228, 174, 185))

    food = food.filter(ImageFilter.UnsharpMask(radius=2 * scale, percent=130, threshold=3))
    img.alpha_composite(food)

    # Table accents: subtle chopsticks/knife lines, not themed decoration.
    overlay = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    od = ImageDraw.Draw(overlay)
    od.line((172 * scale, 150 * scale, 470 * scale, 700 * scale), fill=(196, 86, 5, 86), width=9 * scale)
    od.line((205 * scale, 135 * scale, 504 * scale, 682 * scale), fill=(217, 164, 65, 92), width=7 * scale)
    od.line((1040 * scale, 158 * scale, 1095 * scale, 650 * scale), fill=(245, 241, 232, 46), width=6 * scale)
    img.alpha_composite(overlay.filter(ImageFilter.GaussianBlur(0.3 * scale)))

    # Fine grain for a less flat mockup.
    noise = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    nd = ImageDraw.Draw(noise)
    for _ in range(6500):
        x = rng.randrange(width)
        y = rng.randrange(height)
        alpha = rng.randrange(8, 22)
        nd.point((x, y), fill=(255, 255, 255, alpha))
    img.alpha_composite(noise)

    return img.convert("RGB").resize((1200, 800), Image.Resampling.LANCZOS)


def main():
    ASSETS.mkdir(parents=True, exist_ok=True)
    if not PNG_PATH.exists():
        create_mockup().save(PNG_PATH, "PNG", optimize=True)
    Image.open(PNG_PATH).save(WEBP_PATH, "WEBP", quality=82, method=6)
    print(f"Converted {PNG_PATH.name} -> {WEBP_PATH.name}")


if __name__ == "__main__":
    main()
