import g4f
import pdfplumber

def extract_text_with_pdfplumber(pdf_path):
    text = ""
    with pdfplumber.open(pdf_path) as pdf:
        for page in pdf.pages:
            page_text = page.extract_text()
            if page_text:
                text += page_text + "\n"
    return text.strip()
def generate_questions(text, topic_hint="the uploaded content"):
    prompt = f"""
You are an expert interviewer. Based on the following text, generate 10 insightful and varied interview questions that test a person's understanding and analytical thinking.

Text:
{text[:3000]}

Make the questions clear and challenging. Do not include answers. Focus on {topic_hint}.
"""

    response = g4f.ChatCompletion.create(
        model="gpt-4",
        messages=[{"role": "user", "content": prompt}],
    )
    
    # Handle different return types (string or dict, depending on g4f version)
    if isinstance(response, str):
        return response
    elif isinstance(response, dict) and "choices" in response:
        return response["choices"][0]["message"]["content"]
    else:
        return "Failed to generate questions."

# ----------- Example Usage -------------
if __name__ == "__main__":
    pdf_path = "/Users/pulkitpandey/Desktop/resume.pdf"  # Replace with actual path
    pdf_text = extract_text_with_pdfplumber(pdf_path)
    
    if not pdf_text:
        print("No text extracted from the PDF.")
    else:
        questions = generate_questions(pdf_text, topic_hint="resume content")
        print("\nGenerated Interview Questions:\n")
        print(questions)
