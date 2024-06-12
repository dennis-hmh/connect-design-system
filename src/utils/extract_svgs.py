import os
import xml.etree.ElementTree as ET

def extract_symbols_to_svgs(input_file, output_folder):
    # Ensure the output directory exists
    os.makedirs(output_folder, exist_ok=True)

    # Parse the SVG file
    tree = ET.parse(input_file)
    root = tree.getroot()
    ns = {'svg': 'http://www.w3.org/2000/svg'}

    symbols_found = root.findall('.//svg:symbol', ns)
    print(f"Found {len(symbols_found)} symbols.")  # Debugging output

    for symbol in symbols_found:
        symbol_id = symbol.get('id')
        print(f"Processing symbol with ID: {symbol_id}")  # Debugging output

        if symbol_id:
            svg = ET.Element('svg', xmlns="http://www.w3.org/2000/svg")
            svg.set('viewBox', symbol.get('viewBox'))
            svg.extend(symbol)
            new_tree = ET.ElementTree(svg)
            output_path = os.path.join(output_folder, f"{symbol_id}.svg")
            new_tree.write(output_path, encoding='utf-8', xml_declaration=True)
            print(f"Written: {output_path}")  # Debugging output

# Usage
input_svg_file = './src/assets/icons/sprite.svg'
output_directory = './src/assets/icons/svg'
extract_symbols_to_svgs(input_svg_file, output_directory)