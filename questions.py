import g4f
import pdfplumber

def extract_text_with_pdfplumber(pdf_path):
    text = ""
    with pdfplumber.open(pdf_path) as pdf:
        for page in pdf.pages:
            text += page.extract_text() + "\n"
    return text

def generate_questions(text, topic_hint="the uploaded content"):
    prompt = f"""
You are an expert interviewer. Based on the following text, generate 10 insightful and varied interview questions that test a person's understanding and analytical thinking. Text:

{text[:3000]}  # Truncate to avoid input length limits

Make the questions clear and challenging. Do not include answers. Focus on {topic_hint}.
"""
    response = g4f.ChatCompletion.create(
        model="gpt-4",
        messages=[{"role": "user", "content": prompt}],
    )
    return response

# Example usage
pdf_path = "/Users/pulkitpandey/Desktop/resume.pdf"  # Path to your uploaded PDF
pdf_text = extract_text_with_pdfplumber(pdf_path)
questions = generate_questions(pdf_text)

print("\nGenerated Interview Questions:\n")
print(questions)
