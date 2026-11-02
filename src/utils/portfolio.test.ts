import test from 'node:test';
import assert from 'node:assert/strict';
import { getProjectBySlug, getFeaturedProjects, getNextAndPrevProject, validateInquiryForm } from './portfolio';

test('getProjectBySlug finds project by matching slug', () => {
  const p1 = getProjectBySlug('shine-on-packaging');
  assert.ok(p1);
  assert.equal(p1?.category, 'GRAPHIC DESIGN');

  const p2 = getProjectBySlug('play-grow-smile');
  assert.ok(p2);
  assert.equal(p2?.category, 'BRAND IDENTITY');

  const unknown = getProjectBySlug('non-existent-slug');
  assert.equal(unknown, undefined);
});

test('getFeaturedProjects returns only featured projects', () => {
  const featured = getFeaturedProjects();
  assert.ok(featured.length >= 3);
  assert.ok(featured.every((p) => p.featured));
});

test('getNextAndPrevProject wraps around project list properly', () => {
  const { prev, next } = getNextAndPrevProject('shine-on-packaging');
  assert.ok(prev);
  assert.ok(next);
  assert.equal(next?.slug, 'play-grow-smile');
});

test('validateInquiryForm handles valid and invalid inputs correctly', () => {
  const invalid = validateInquiryForm({
    name: '',
    email: 'invalid-email',
    message: 'hi',
  });
  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.name);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.message);

  const valid = validateInquiryForm({
    name: 'Sarah Connor',
    email: 'sarah@example.com',
    message: 'We need a brand redesign and packaging design for our new product line.',
  });
  assert.equal(valid.isValid, true);
  assert.deepEqual(valid.errors, {});
});
