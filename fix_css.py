import re

with open('src/styles/globals.css', 'r') as f:
    content = f.read()

# Just remove the string entirely since NextJS Turbopack chokes on it
# Specifically: .bg-\[url\(\&\#x27\;\/noise\.png\&\#x27\;\)\]{background-image:url(&#x27;/noise.png&#x27;)}
content = re.sub(r'\.bg-\[url\(\&\#x27\;\/noise\.png\&\#x27\;\)\]\{background-image:url\(&#x27;/noise\.png&#x27;\)\}', '', content)
content = re.sub(r'&#x27;/noise\.png&#x27;', \"'/noise.png'\", content)

with open('src/styles/globals.css', 'w') as f:
    f.write(content)
